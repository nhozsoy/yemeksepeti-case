import React from 'react';
import './QuestionTable.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { formatDateString } from '../../Helper';

function QuestionTable(props) {
  const { questions } = props;

  const renderTableHead = () => {
    return (
      <thead>
        <tr>
          <th>Question</th>
          <th>Published At</th>
          <th>Vote</th>
        </tr>
      </thead>
    );
  };

  const renderTableBody = () => {
    return (
      <tbody>
        {
          questions.map(question => (
            <tr key={question.url}>
              <td>{question.question}</td>
              <td>{formatDateString(question.published_at)}</td>
              <td>
                <Link to={question.url}>
                  <i className='fa fa-arrow-right' />
                  Details
                </Link>
              </td>
            </tr>
          ))
        }
      </tbody>
    );
  };

  return (
    <table className='question-table'>
      {renderTableHead()}
      {renderTableBody()}
    </table>
  );
}

QuestionTable.propTypes = {
  questions: PropTypes.array,
};

export default QuestionTable;
