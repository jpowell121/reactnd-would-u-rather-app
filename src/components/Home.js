import React, { Component } from 'react'
import { connect } from 'react-redux'
import CardFrame from './CardFrame'
import { Redirect } from 'react-router-dom'
import allDone from '../images/thumbs_up.png'
import PropTypes from 'prop-types'


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
          <button className="tablinks active"
                  id='unanswered'
                  onClick={(e) => this.handleTabClick(e, 'questions')}>Unanswered Questions</button>
          <button className="tablinks"
                  id='answered'
                  onClick={(e) => this.handleTabClick(e, 'answers')}>Answered Questions</button>
        </div>

        <div id="questions" className="tabcontent" style={{display: 'block'}}>
          {this.props.unansweredQuestions.length ?
            this.props.unansweredQuestions.map((question)=>
              <CardFrame key={question}
                         id={question}
                         status='questions'
                         type='card' />
            ) :
            <div className="qf-alldone-body">
              <img
                src={allDone}
                alt='All questions answered'
                className='qf-alldone'
              />
              <p className='qf-message'>Great! You have answered all the questions</p>
            </div>
          }
        </div>

        <div id="answers" className="tabcontent">
          {this.props.answeredQuestions.length ?
            this.props.answeredQuestions.map((question)=>
              <CardFrame key={question}
                         id={question}
                         status='answers'
                         type='card' />
            ) :
            <p>Get cracking! You haven't answered any questions!</p>
          }
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

  // find unanswered (remaining) questions
  const unansweredQuestions = questionIds.filter(value => -1 === answeredQuestions.indexOf(value));

  return {
    authedUser: authedUser,
    answeredQuestions: answeredQuestions,
    unansweredQuestions: unansweredQuestions,
  }
}

Home.propTypes = {
  status: PropTypes.oneOf(['questions', 'answers']),
};


export default connect(mapStateToProps)(Home)