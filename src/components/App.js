import React, { Component } from 'react';
import '../index.css';
import { connect } from 'react-redux'
import { handleInitialData } from "../actions/shared";
import QuestionFrame from './QuestionFrame'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <div className="center">
        <QuestionFrame />
      </div>
    );
  }
}

export default connect()(App);
