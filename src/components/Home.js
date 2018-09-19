import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionFrame from './QuestionFrame'

class Home extends Component {

  render() {
    return (
      <div><h1>Home</h1><QuestionFrame/></div>
    )
  }
}


function mapStateToProps ({authedUser, users, questions}) {

  console.log('----------------');
  console.log('authedUser: ', authedUser);
  console.log('users: ', users);
  console.log('questions: ', questions);
  console.log('----------------');

  return {
    authedUser: authedUser,
    users: users,
    questions: questions,
  }

}

export default connect(mapStateToProps)(Home)