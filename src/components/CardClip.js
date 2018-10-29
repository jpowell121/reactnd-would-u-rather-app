import React from 'react'
import { Link } from 'react-router-dom'

const CardClip  =  ({ id, status, questionText}) => {

  return (
    <div className="qf-info">
      <span>Would you rather....</span>
      <p>...{questionText}...</p>
      {/* handle sending user to either view a poll (for answered questions) or take the poll (for unanswered) */}
      <Link to={status === 'answers' ? `/polls/${id}` : `/questions/${id}` }
            className='qf-info-button'
      >
        {status === 'answers' ? 'View Poll' : 'Take Poll'}
      </Link>
    </div>
  )
};

export default CardClip