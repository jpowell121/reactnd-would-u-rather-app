import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect, NavLink, withRouter } from 'react-router-dom'
import {setAuthedUser} from "../actions/authedUser";

class Nav extends Component {


  handleLogout = () => {

    const { dispatch } = this.props;

    // set the redux state to no user
    dispatch(setAuthedUser(''));

    // set state so next render will send user to the Home component ('\login' route)
    return <Redirect to='/'/>

  };

  render() {
    return (
      <div className='nav'>
        <ul>
          <li>
            <NavLink to='/' exact activeClassName='active'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/new' activeClassName='active'>
              New Question
            </NavLink>
          </li>
          <li>
            <NavLink to='/leaderboard' activeClassName='active'>
              Leader Board
            </NavLink>
          </li>
          <div className='nav-right'  style={ this.props.authedUser ? { display:'block'} : {display : 'none'}}>
            <li>
                <span className='login-message'>Hello, {this.props.loggedUser}!</span>
            </li>
            <li>
              <a onClick={this.handleLogout}>
                Logout
              </a>
            </li>
          </div>
        </ul>
      </div>
    )
  }
}

function mapStateToProps ( {authedUser, users} ) {

  // if no user logged in, return
  if (authedUser === '' || authedUser === null) {
    return {authedUser: '',}
  }

  const loggedUser = users[authedUser].name;

  return {
    authedUser: authedUser,
    loggedUser: loggedUser,
  }
}

export default withRouter(connect(mapStateToProps)(Nav))