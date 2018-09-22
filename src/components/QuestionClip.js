import React from 'react'

export default function QuestionClip (props) {
  return (
    <div className="qf-info">
      <span>Would you rather....</span>
      <p>...{props.questionText}...</p>
      <button className="qf-info-button">View Poll</button>
    </div>
  )
}