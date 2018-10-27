import React, { Component } from 'react'
import { connect } from 'react-redux'

class LeaderEntry extends Component {

  render() {
    return(
      <div className="questionFrame">
        <div className="qf-body">
          <div>
            <img
              src={this.props.avatarURL}
              alt={this.props.author}
              className='qf-avatar'
            />
          </div>
          <div className="qf-divider"></div>

          <div className="leaderboard-score-panel">
            <h1>{this.props.author}</h1>
            <div className="leaderboard-score-individual">
              <div className="leaderboard-score-individual-title">Answered questions</div>
              <div className="leaderboard-score-individual-score">{ this.props.questionsAnswered }</div>
            </div>
            <div className="leaderboard-score-individual">
              <div className="leaderboard-score-individual-title">Created questions</div>
              <div className="leaderboard-score-individual-score">{ this.props.questionsCreated }</div>
            </div>
          </div>

          <div className="qf-divider"></div>
          <div className="leaderboard-summary-panel">
            <div className="leaderboard-score-header">
              Score</div>
            <div className="leaderboard-score">
              <div className="leaderboard-score-circle">
                { this.props.questionsAnswered * 10 + this.props.questionsCreated * 10 }
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


function mapStateToProps ({ users }, {id}) {

  // get props relevant to the current user
  const avatarURL = users[id].avatarURL;
  const author = users[id].name;
  const questionsAnswered =  Object.keys(users[id].answers).length;
  const questionsCreated = users[id].questions.length;

  return {
    avatarURL,
    author,
    questionsAnswered,
    questionsCreated,
  }
}

export default connect(mapStateToProps)(LeaderEntry)