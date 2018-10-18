import React, { Component } from 'react'
import CardFrame from './CardFrame'
import {connect} from "react-redux";


class Leaderboard extends Component {

  render() {
    return (
      <div>
        <p>Test Leaderboard</p>
        {/*<CardFrame id={this.props.id} type='pollResult'></CardFrame>*/}
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

export default connect(mapStateToProps)(Leaderboard)