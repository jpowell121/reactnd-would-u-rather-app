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
import Question from './Question'

class App extends Component {
  componentDidMount() {
    this.props.handleInitialData();
  }

  render() {

    const{ loading } = this.props;

    return (
        <Router>
          <Fragment>
            <LoadingBar/>
            <div className="container">
              <Nav />
              {loading === true
              ? null
                : <div>
                  <Route path='/' exact component={Home} />
                  <Route path='/login' exact component={Login} />
                  <Route path='/leaderboard' exact component={Leaderboard} />
                  <Route path='/add' exact component={NewQuestion} />
                  <Route path='/polls/:id'  component={Poll} />
                  <Route path='/questions/:id'  component={Question} />
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

const mapDispatchToProps = {
  handleInitialData,
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
