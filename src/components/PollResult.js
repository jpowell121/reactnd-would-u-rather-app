import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'


class PollResult extends Component {

  render() {
    if (this.props.authedUser === "") {
      return <Redirect to='/'/>
    }
    return (
      <div className="qf-info">
        <span>Results:</span>
        <div className={this.props.optionOnePercent > 50 ? 'qf-poll-leader' : 'qf-poll'} >
          <p>Would you rather {this.props.optionOne}?</p>
          <div className='qf-progressbar'>
            <div style={{width: `${this.props.optionOnePercent}%`, textAlign: 'center'}}>{this.props.optionOnePercent.toFixed(1)}%</div>
          </div>
          <p>{this.props.optionOneVotes} out of {this.props.totalVotes} votes</p>
        </div>
        <div className={this.props.optionTwoPercent > 50 ? 'qf-poll-leader' : 'qf-poll'}>
          <p>Would you rather {this.props.optionTwo}?</p>
          <div className='qf-progressbar'>
            <div style={{width: `${this.props.optionTwoPercent}%`, textAlign: 'center'}}>{this.props.optionTwoPercent.toFixed(1)}%</div>
          </div>
          <p>{this.props.optionTwoVotes} out of {this.props.totalVotes} votes</p>
        </div>
      </div>
    )
  }
}

function mapStateToProps ({authedUser, questions}, {id}) {

  // get counts of votes
  const optionOneVotes = questions[id].optionOne.votes.length;
  const optionTwoVotes = questions[id].optionTwo.votes.length;
  const totalVotes = optionOneVotes + optionTwoVotes;
  // get labels for question options
  const optionOne = questions[id].optionOne.text;
  const optionTwo = questions[id].optionTwo.text;
  // get which answer the logged in users selected
  const authVote = questions[id].optionOne.votes.indexOf(authedUser) > -1 ? 1 : 2;
  // get percentage for each answer
  const optionOnePercent = optionOneVotes / totalVotes * 100;
  const optionTwoPercent = optionTwoVotes / totalVotes * 100;


  return {
    id,
    authedUser,
    authVote,
    optionOne,
    optionTwo,
    optionOneVotes,
    optionTwoVotes,
    optionOnePercent,
    optionTwoPercent,
    totalVotes,
  }

}

export default connect(mapStateToProps)(PollResult)