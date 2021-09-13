import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../../App.css';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Loading from '../Loading/Loading';
import QuestionChoice from '../QuestionChoice/QuestionChoice';
import { formatDateString } from '../../Helper';

export default function QuestionDetail() {
  const [displayVotes, setDisplayVotes] = useState(false);
  const [question, setQuestion] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [voteError, setVoteError] = useState(null);

  const params = useParams();

  useEffect(() => {
    axios.get(`https://polls.apiblueprint.org/questions/${params.id}`)
      .then(response => {
        if (response.data) {
          setQuestion(response.data);
          setError(null);
        }
      })
      .catch(error => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      })
  }, [params.id]);

  const vote = (url) => {
    axios.post(`https://polls.apiblueprint.org${url}`)
      .then(response => {
        if (response.status === 201) {
          setDisplayVotes(true);
          setVoteError(null);          
          question.choices.forEach(choice => {
            if (choice.url === response.data.url) choice.votes += 1;
          });
          setQuestion({...question});
        }
      })
      .catch(error => {
        setVoteError(error);
      })
      .finally(() => {
        setLoading(false);
      })
  };

  const renderQuestionChoices = () => {
    return (
      <div className='question-choices'>
        {question.choices.map(choice => (
          <QuestionChoice key={choice.url}
                          url={choice.url}
                          text={choice.choice}
                          votes={choice.votes}
                          vote={vote}
                          displayVotes={displayVotes}/>
        ))}
      </div>
    )
  };

  const renderQuestion = () => {
    return (
      <div className='question-container'>
        {voteError && <ErrorMessage message={voteError} />}
        <h3>{question.question}</h3>
        <p className='published-at'>Published At: {formatDateString(question.published_at)}</p>
        {renderQuestionChoices()}
      </div>
    )
  };

  return (
    <div className='questions-detail-page'>
      <h1>Question Detail</h1>
      {error && <ErrorMessage message={error} />}
      {loading && <Loading />}
      {question && renderQuestion()}
    </div>
  );
}
