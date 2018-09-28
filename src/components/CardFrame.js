import React, { Component } from 'react'
import { connect } from 'react-redux'
import CardClip from './CardClip'
import PollResult from './PollResult'
import QuestionClip from './QuestionClip'
import PropTypes from 'prop-types'

class CardFrame extends Component {

  render() {
    return (
      <div className="questionFrame">
        <div className="qf-header">{this.props.author} asks:</div>
        <div className="qf-body">
          <img
            src={this.props.avatarURL}
            alt={this.props.author}
            className='qf-avatar'
          />
          <div className="qf-divider"></div>
          {/* use incoming type prop to determine which content to draw */}
          {this.props.type === 'card' &&
            <CardClip
              questionText={this.props.questionText}
              id={this.props.id}
              status={this.props.status}/>
          }
          {this.props.type === 'pollResult' &&
            <PollResult />
          }
          {this.props.type === 'question' &&
            <QuestionClip />
          }
          </div>
      </div>
    )
  }
}

function mapStateToProps({authedUser, users, questions}, {id}) {

  const authorId = questions[id].author;
  const questionText = questions[id].optionOne.text;
  const author = users[authorId].name;
  const avatarURL = users[authorId].avatarURL;

  return {
    questionText: questionText,
    author: author,
    avatarURL: avatarURL,
  }

}

CardFrame.propTypes = {
  type: PropTypes.oneOf(['card', 'pollResult', 'question']),
};


export default connect(mapStateToProps)(CardFrame)
