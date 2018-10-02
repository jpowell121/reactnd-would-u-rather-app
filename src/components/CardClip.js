import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class CardClip extends Component {

  render() {
    return (
      <div className="qf-info">
        <span>Would you rather....</span>
        <p>...{this.props.questionText}...</p>
        {/* handle sending user to either view a poll (for answered questions) or take the poll (for unanswered) */}
        <Link to={this.props.status === 'answers' ? `/poll/${this.props.id}` : `/question/${this.props.id}` }
              className='qf-info-button'>
          {this.props.status === 'answers' ? 'View Poll' : 'Take Poll'}</Link>
      </div>
    )
  }
}

export default CardClip