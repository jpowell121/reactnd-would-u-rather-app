import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class CardClip extends Component {

  render() {
    return (
      <div className="qf-info">
        <span>Would you rather....</span>
        <p>...{this.props.questionText}...</p>
        <Link to={`/poll/${this.props.id}`}
              className='qf-info-button'>
          {this.props.status === 'answers' ? 'View Poll' : 'Take Poll'}</Link>
      </div>
    )
  }
}

export default CardClip