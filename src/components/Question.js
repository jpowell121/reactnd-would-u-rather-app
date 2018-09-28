import React, { Component } from 'react'
import QuestionFrame from './CardFrame'
import {connect} from "react-redux";

class Question extends Component {

  render() {
    return (
      <QuestionFrame id={this.props.id} type='question'></QuestionFrame>
    )
  }
}

function mapStateToProps( {authedUser}, props ) {

  const { id } = props.match.params;

  return {
    authedUser,
    id,
  }
}

export default connect(mapStateToProps)(Question)