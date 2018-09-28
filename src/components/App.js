import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { connect } from 'react-redux'
import { handleInitialData } from "../actions/shared";
import LoadingBar from 'react-redux-loading';
import Home from './Home';
import Login from './Login';
import Leaderboard from './Leaderboard';
import NewQuestion from "./NewQuestion";
import Nav from './Nav'
import Poll from './Poll'

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
              <Nav />
              {this.props.loading === true
              ? null
                : <div>
                  <Route path='/' exact component={Home} />
                  <Route path='/login' exact component={Login} />
                  <Route path='/leaderboard' exact component={Leaderboard} />
                  <Route path='/new' exact component={NewQuestion} />
                  <Route path='/poll/:id'  component={Poll} />
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
