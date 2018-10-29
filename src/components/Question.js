import React, { Component } from 'react'
import CardFrame from './CardFrame'
import {connect} from "react-redux";


class Question extends Component {


  render() {

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