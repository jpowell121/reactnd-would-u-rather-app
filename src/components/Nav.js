import React from 'react'
import { connect } from 'react-redux'
import { Redirect, NavLink, withRouter } from 'react-router-dom'
import {setAuthedUser} from "../actions/authedUser";

const Nav = ({ setUser, authedUser, loggedUser, avatarURL, author}) => {

  const navLinks = () => {
    const links = [
      ['/', 'Home'],
      ['/add', 'New Question'],
      ['/leaderboard', 'Leaderboard']
    ];

    return links.map( link => (
      <li key={link[1]}>
        <NavLink to={link[0]} activeClassName = 'active'>
          {link[1]}
        </NavLink>
      </li>
    ))
  };

  const handleLogout = () => {

    setUser();
    // set state so next render will send user to the Home component ('\login' route)
    return <Redirect to='/'/>

  };

  return (
    <div className='nav'>
      <ul>
        {navLinks()}
        <div className='nav-right' style={{ display: authedUser ? 'block' : 'none'}}>
          <li>
              <span className='login-message'>Hello, {loggedUser}!</span>
          </li>
          <li>
            <img
              src={avatarURL}
              alt={author}
              className='nav-avatar'
            />
          </li>
          <li>
            <a onClick={handleLogout}>
              Logout
            </a>
          </li>
        </div>
      </ul>
    </div>
  )
};




const mapDispatchToProps = dispatch => ({
  setUser: () => dispatch(setAuthedUser(''))
});


function mapStateToProps ( {authedUser, users} ) {

  // if no user logged in, return
  if (authedUser === '' || authedUser === null) {
    return {authedUser: '',}
  }

  // get props relevant to the current logged in user
  const loggedUser = users[authedUser].name;
  const author = users[authedUser].name;
  const avatarURL = users[authedUser].avatarURL;

  return {
    authedUser: authedUser,
    loggedUser: loggedUser,
    author,
    avatarURL,
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Nav))