import React, { Component } from 'react'
import CardFrame from './CardFrame'
import {connect} from "react-redux";

class Poll extends Component {

  render() {
    return (
      <div>
        <CardFrame id={this.props.id} type='pollResult'></CardFrame>
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