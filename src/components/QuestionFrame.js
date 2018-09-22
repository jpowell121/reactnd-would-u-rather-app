import React, { Component } from 'react'
import { connect } from 'react-redux'


class QuestionFrame extends Component {

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
          <div className="qf-info">
            <span>Would you rather....</span>
            <p>...{this.props.questionText}...</p>
            <button className="qf-info-button">View Poll</button>
          </div>
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

export default connect(mapStateToProps)(QuestionFrame)
