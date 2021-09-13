import React, { useState } from 'react';
import '../../App.css';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

export default function CreateQuestion() {
  const [questionText, setQuestionText] = useState('');
  const [choices, setChoices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
  };

  const renderQuestionForm = () => {
    return (
      <form onSubmit={handleSubmit} className='question-form'>
        <label className='question-form-label'>
          Question:
          <input type='text'
                 value={questionText}
                 className='question-form-input'
                 placeholder='What is your favourite movie?'
                 onChange={e => setQuestionText(e.target.value)}
                 />
        </label>
        <label className='question-form-label'>
          Choices: <p className='choices-warning-text'>Seperate choices with comma (,)</p>
          <input type='text'
                 choices={choices}
                 className='question-form-input'
                 placeholder='Interstellar, Godfather, Star Wars'
                 onChange={e => setChoices(e.target.value)} />
        </label>
        <input type='submit' value={loading ? 'Loading...' : 'Submit'} className='submit-button' />
      </form>
    )
  };

  return (
    <div className='questions-detail-page'>
      <h1>Question Detail</h1>
      {error && <ErrorMessage message={error} />}
      {renderQuestionForm()}
    </div>
  );
}
