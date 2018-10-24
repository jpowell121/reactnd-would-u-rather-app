import React, { Component } from 'react'
import LeaderEntry from './LeaderEntry'
import {connect} from "react-redux";


class Leaderboard extends Component {

  render() {
    return (
      <div className='leaderboard'>
        <div className='leaderboard-header'>
          <h2>Leaderboard</h2>
        </div>
        <div className='leaderboard-body'>
          {
            this.props.userIds.map((userId)=>
            <LeaderEntry key={userId}
                         id={userId} />
          )}
        </div>
      </div>
    )
  }
}

function mapStateToProps( { users }) {

  // this gets ids of the users
  const userIds = Object.keys(users);

  // sort by "score" (total number of questions and answers by the user)
  userIds.sort(function(a, b) {
    return users[a].questions.length + Object.keys(users[a].answers).length < users[b].questions.length + Object.keys(users[b].answers).length;
  });

  return {
    users,
    userIds,
  }
}

export default connect(mapStateToProps)(Leaderboard)