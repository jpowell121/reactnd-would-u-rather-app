import React, { Component } from 'react'
import CardFrame from './CardFrame'
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom'


class Question extends Component {



  render() {

    if (!this.props.authedUser) {

      return <Redirect to={{
        pathname: '/login',
        state: { from: this.props.location }
      }} />
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