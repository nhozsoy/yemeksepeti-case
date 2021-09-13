import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../App.css';
import QuestionTable from '../QuestionTable/QuestionTable';

export default function QuestionList() {
  const [questions, setQuestions] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("https://polls.apiblueprint.org/questions")
      .then(response => {
        if (response.data) setQuestions(response.data);
      })
      .catch(error => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      })
  }, []);

  const renderErrorMessage = () => {
    return (
      <p className='error-message'>{error}</p>
    )
  };

  const renderLoadingMessage = () => {
    return (
      <p>Loading...</p>
    )
  };

  const renderQuestions = () => {
    return (
      <QuestionTable question={questions}/>
    )
  };

  return (
    <div className='questions-list-page'>
      <h1>Question List</h1>
      {error && renderErrorMessage()}
      {loading && renderLoadingMessage()}
      {questions && renderQuestions()}
    </div>
  );
}
