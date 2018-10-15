import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from "react-redux";
import { handleAddQuestion } from "../actions/questions";

class NewQuestion extends Component {
  state = {
    answered: false,
    optionOneText: '',
    optionTwoText: '',
  };


  handleChange = (e) => {
    const controlId = e.target.id;
    const text = e.target.value;

    this.setState(() => ({
      [controlId]: text,
    }))
  };

  handleSubmitNewQuestion = (event) => {
    event.preventDefault();

    const { optionOneText, optionTwoText } = this.state;
    const { dispatch, author } = this.props;

    dispatch(handleAddQuestion({optionOneText, optionTwoText, author}));

    this.setState(() => ({
      answered: true,
    }))
  };

  render() {
    // if user is not logged in, redirect to login
    if (this.props.author === '' || this.props.author === undefined) {
      return <Redirect to='/'/>
    }
    // if the question is answered, redirect to home screen
    if (this.state.answered === true) {
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
            <input id="optionOneText" placeholder='Enter option one text here' onChange={this.handleChange} />
            <h3><span>Or</span></h3>
            <input id='optionTwoText' placeholder='Enter option two text here' onChange={this.handleChange} />
            <button disabled={!this.state.optionOneText || !this.state.optionTwoText } className='new-question-button'>Submit</button>
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


export default connect(mapStateToProps)(NewQuestion)