import React from 'react';
import './QuestionTable.css';
import PropTypes from 'prop-types';

function QuestionTable(props) {
  return (
    <table className='question-table'>
      <thead>
        <tr>
          <th>Question</th>
          <th>Published At</th>
          <th>Vote</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Question 1</td>
          <td>01.01.2021</td>
          <td>
            <button></button>
          </td>
        </tr>
      </tbody>
      
    </table>
  );
}

QuestionTable.propTypes = {
  questions: PropTypes.array,
};

export default QuestionTable;
