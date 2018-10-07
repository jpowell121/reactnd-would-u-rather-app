import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAnswerUpdateUser } from "../actions/users";
import { Redirect } from 'react-router-dom'


class QuestionClip extends Component {
  state = {
    option: 'optionOne',
    answered: false,
  };

  handleOptionChange = (e) => {
    // set state for option selected
    this.setState( { option: e.target.id,})
  };

  handleAnswerQuestion = (event) => {
    event.preventDefault();

    const { dispatch, authedUser, id } = this.props;

    // update user store
    dispatch(handleAnswerUpdateUser({
      authedUser: authedUser,
      qid: id,
      answer: this.state.option,
    }));

    this.setState({
      answered: true,
    });
  };

  render() {
    if (this.state.answered === true) {
      return <Redirect to='/'/>
    }
    return (
      <div className="qf-info">
        <h2>Would you rather ...</h2>
        <form onSubmit={this.handleAnswerQuestion}>
          <ul>
            <li>
              <input type="radio"
                     id="optionOne"
                     checked={this.state.option === 'optionOne'}
                     onChange={this.handleOptionChange}/>
              {this.props.optionOne}
            </li>
            <li>
              <input type="radio"
                     id="optionTwo"
                     checked={this.state.option !== 'optionOne'}
                     onChange={this.handleOptionChange}/>
              {this.props.optionTwo}
            </li>
          </ul>
          <button className='qf-info-button'>Submit</button>
        </form>
      </div>
    )
  }
}

function mapStateToProps ({authedUser, questions}, {id}) {

  const optionOne = questions[id].optionOne.text;
  const optionTwo = questions[id].optionTwo.text;

  return {
    id,
    authedUser,
    optionOne,
    optionTwo,
  }

}

export default connect(mapStateToProps)(QuestionClip)