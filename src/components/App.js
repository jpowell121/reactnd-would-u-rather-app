import React, { Component } from 'react';
import '../index.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from "../actions/shared";
import Home from './Home'
import Login from './Login';
import Leaderboard from './Leaderboard'
import NewQuestion from "./NewQuestion";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <Router>
        <div className="container">
          <Route path='/' exact component={Home} />
          <Route path='/login' exact component={Login} />
          <Route path='/leaderboard' exact component={Leaderboard} />
          <Route path='/new' exact component={NewQuestion} />
        </div>
      </Router>
    );
  }
}

export default connect()(App);
