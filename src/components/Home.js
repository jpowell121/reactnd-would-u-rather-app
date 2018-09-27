import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionFrame from './QuestionFrame'
import { Redirect } from 'react-router-dom'


class Home extends Component {

  handleTabClick = (event, tabName) => {

    // hide all frames
    let tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    // reset tabs
    let tablinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // highlight the selected tab and mark it active.
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.className += " active";
  };

  render() {
    const { authedUser } = this.props;


    // if no user logged in, redirect to login page
    if (authedUser === '') {
      return <Redirect to='/login'/>
    }


    return (
      <div>
        <div className="tab">
          <button className="tablinks active" id='answered' onClick={(e) => this.handleTabClick(e, 'answers')}>Answered Questions</button>
          <button className="tablinks" id='unanswered' onClick={(e) => this.handleTabClick(e, 'questions')}>Unanswered Questions</button>
        </div>

        <div id="answers" className="tabcontent" style={{display: 'block'}}>
          {this.props.answeredQuestions.map((question)=> <QuestionFrame key={question} id={question} />)}
        </div>

        <div id="questions" className="tabcontent">
          {this.props.unansweredQuestions.map((question)=> <QuestionFrame key={question} id={question} />)}
        </div>
      </div>
    )
  }
}


function mapStateToProps ({authedUser, users, questions}) {

  // if no user logged in, return
  if (authedUser === '' || authedUser === null) {
    return {authedUser: '',}
  }

  // this gets keys of the questions
  const questionIds = Object.keys(questions);

  // this gets keys of answers by authed users
  const answeredQuestions = Object.keys(users[authedUser].answers);

  // fine unanswered (remaining) questions
  const unansweredQuestions = questionIds.filter(value => -1 === answeredQuestions.indexOf(value));

  return {
    authedUser: authedUser,
    answeredQuestions: answeredQuestions,
    unansweredQuestions: unansweredQuestions,
  }
}

export default connect(mapStateToProps)(Home)