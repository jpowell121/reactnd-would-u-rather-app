import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { connect } from 'react-redux'
import { handleInitialData } from "../actions/shared";
import LoadingBar from 'react-redux-loading';
import Home from './Home';
import Login from './Login';
import Leaderboard from './Leaderboard';
import NewQuestion from "./NewQuestion";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
        <Router>
          <Fragment>
            <LoadingBar/>
            <div className="container">
              {this.props.loading === true
              ? null
                : <div>
                  <Route path='/' exact component={Home} />
                  <Route path='/login' exact component={Login} />
                  <Route path='/leaderboard' exact component={Leaderboard} />
                  <Route path='/new' exact component={NewQuestion} />
                </div>}
            </div>
          </Fragment>
        </Router>
    )
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    loading: authedUser === null
  }
}


export default connect(mapStateToProps)(App);
