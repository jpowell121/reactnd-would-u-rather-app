import React, { Component } from 'react'


class QuestionFrame extends Component {

  render() {
    return (
      <div className="questionFrame">
        <div className="qf-header">Joel Powell asks:</div>
        <div className="qf-body">
          <img
            src='https://tylermcginnis.com/would-you-rather/tyler.jpg'
            alt={`Avatar of Joel`}
            className='qf-avatar'
          />
          <div className="qf-divider"></div>
          <div className="qf-info">
            <span>Would you rather....</span>
            <p>...be a front end developer...</p>
            <button className="qf-info-button">View Poll</button>
          </div>
        </div>
      </div>
    )
  }
}

export default QuestionFrame
