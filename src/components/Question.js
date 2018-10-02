import React, { Component } from 'react'
import CardFrame from './CardFrame'
import {connect} from "react-redux";
import { Redirect } from 'react-router-dom'

class Question extends Component {


  render() {

    // if users is not logged in, redirect to login
    if (this.props.authedUser === '') {
      return <Redirect to='/'/>
    }

    return (
      <CardFrame id={this.props.id} type='question'></CardFrame>
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