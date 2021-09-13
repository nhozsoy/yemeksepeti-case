import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../../App.css';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Loading from '../Loading/Loading';

export default function QuestionDetail() {
  const [question, setQuestion] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const params = useParams();

  useEffect(() => {
    axios.get(`https://polls.apiblueprint.org/questions/${params.id}`)
      .then(response => {
        if (response.data) setQuestion(response.data);
      })
      .catch(error => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      })
  }, []);

  const renderQuestion = () => {
    return (
      <p></p>
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
