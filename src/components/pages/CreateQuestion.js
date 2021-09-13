import React, { useState } from 'react';
import axios from 'axios';
import '../../App.css';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

export default function CreateQuestion() {
  const [questionText, setQuestionText] = useState('');
  const [choices, setChoices] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const isQuestionValid = () => questionText && choices && choices.length >= 2;

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true); 

    if (!isQuestionValid()) {
      setError('Lütfen soru metni ve en az 2 şık girin.')
    } else {
      const questionData = {
        question: questionText,
        choices: choices.split(',')
      };

      axios({
        method: 'post',
        url: 'https://polls.apiblueprint.org/questions',
        data: questionData,
        headers: { "Content-Type": 'application/json' },
      })
      .then(response => {
        if (response.status === 201) {
          alert('Question created!');
          setError(null);
          setQuestionText('');
          setChoices('');
        }
      })
      .catch(error => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      })
    }
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
                 value={choices}
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
