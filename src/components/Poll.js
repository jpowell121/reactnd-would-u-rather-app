import React, { Component } from 'react'
import CardFrame from './CardFrame'
import {connect} from "react-redux";
import { Redirect } from 'react-router-dom'

class Poll extends Component {

  render() {

    if (!this.props.authedUser) {

      return <Redirect to={{
        pathname: '/login',
        state: { from: this.props.location }
      }} />
    }

    return (
      <div>
        ˚<CardFrame id={this.props.id} type='pollResult'></CardFrame>
      </div>
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

export default connect(mapStateToProps)(Poll)