import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../App.css';
import QuestionTable from '../QuestionTable/QuestionTable';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Loading from '../Loading/Loading';

export default function QuestionList() {
  const [questions, setQuestions] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("https://polls.apiblueprint.org/questions")
      .then(response => {
        if (response.data) {
          setQuestions(response.data);
          setError(null);
        }
      })
      .catch(error => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      })
  }, []);

  const renderQuestions = () => {
    return (
      <QuestionTable questions={questions} />
    )
  };

  return (
    <div className='questions-list-page'>
      <h1>Question List</h1>
      {error && <ErrorMessage message={error}/>}
      {loading && <Loading />}
      {questions && renderQuestions()}
    </div>
  );
}
