import React from 'react';
import './QuestionChoice.css';
import PropTypes from 'prop-types';

function QuestionChoice(props) {
  return (
    <button className='question-choice'
            onClick={props.vote.bind(this, props.url)}
            disabled={props.displayVotes}>
      {props.text}
      {props.displayVotes && ` (${props.votes})`}
    </button>
  );
};

QuestionChoice.propTypes = {
  url: PropTypes.string,
  text: PropTypes.string,
  vote: PropTypes.func,
  votes: PropTypes.number,
  displayVotes: PropTypes.bool,
};

export default QuestionChoice;
