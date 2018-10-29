import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from "react-redux";
import { handleAddQuestion } from "../actions/questions";

class NewQuestion extends Component {
  state = {
    created: false,
    optionOneText: '',
    optionTwoText: '',
  };


  handleChange = (e) => {
    const { id, value }  = e.target;
    this.setState({ [id]: value })
  };

  handleSubmitNewQuestion = (event) => {
    event.preventDefault();
    const { optionOneText, optionTwoText } = this.state;
    const { author, newPoll } = this.props;
    newPoll({
      optionOneText,
      optionTwoText,
      author
    });

    this.setState({ created: true })
  };

  render() {
    const { author } = this.props;
    const { created, optionOneText, optionTwoText } = this.state;

    // if user is not logged in, redirect to login
    if (!author) {
      return <Redirect to='/'/>
    }
    // if the question is created, redirect to home screen
    if (created) {
      return <Redirect to='/'/>
    }
    return (
      <div className='new-question'>
        <div className='new-question-header'>
          <h2>Create New Question</h2>
        </div>
        <div className='new-question-body'>
          <p>Complete the question:</p>
          <form className="new-question-form" onSubmit={this.handleSubmitNewQuestion}>
            <span>Would you rather...</span>
            <input
              id="optionOneText"
              placeholder='Enter option one text here'
              onChange={this.handleChange}
            />
            <h3><span>Or</span></h3>
            <input
              id='optionTwoText'
              placeholder='Enter option two text here'
              onChange={this.handleChange}
            />
            <button
              disabled={!optionOneText || !optionTwoText }
              className='new-question-button'
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    )
  }
}

function mapStateToProps( {authedUser} ) {

  return {
    author: authedUser,
  }
}

function mapDispatchToProps(dispatch)  {
  return {
    newPoll: function (poll) {
      dispatch(handleAddQuestion({ ...poll}));
    }
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(NewQuestion)