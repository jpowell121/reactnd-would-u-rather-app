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

    this.setState({
      [id]: value,
    })
  };

  handleSubmitNewQuestion = (event) => {
    event.preventDefault();

    const { optionOneText, optionTwoText } = this.state;
    const { author } = this.props;

    this.props.handleAddQuestion({optionOneText, optionTwoText, author});

    this.setState({
      created: true,
    })
  };

  render() {
    // if user is not logged in, redirect to login
    if (this.props.author === '' || this.props.author === undefined) {
      return <Redirect to='/'/>
    }
    // if the question is created, redirect to home screen
    if (this.state.created) {
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
              disabled={!this.state.optionOneText || !this.state.optionTwoText }
              className='new-question-button'>Submit
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

const mapDispatchToProps = {
  handleAddQuestion,
};


export default connect(mapStateToProps, mapDispatchToProps)(NewQuestion)