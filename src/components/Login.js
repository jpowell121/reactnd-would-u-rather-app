import React, { Component } from 'react'
import { connect } from 'react-redux'
import logo from '../images/question_man.png'
import { setAuthedUser } from '../actions/authedUser'
import { Redirect } from 'react-router-dom'

class Login extends Component {
  state = {
    redirectToReferrer: false,
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { setUser } = this.props;

    // set the redux state to selected user
    setUser(this.refs.userSelected.value);

    // set state so next render will send user to the Home component ('\' route)
    this.setState(() => ({ redirectToReferrer: true }))

  };

  render() {
    // either send the user to the home page (/) or the referring URL if it exists
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer === true) {
      return <Redirect to={from} />
    }

    return (
      <div className='login-form'>
        <div className='login-header'>
          <h2>Welcome to the Would You Rather App!</h2>
          <p>Please sign in to continue...</p>
        </div>
        <div className='login-body'>
          <img
            src={logo}
            alt='Would you rather logo'
            className='login-logo'
          />
          <h2>Sign In</h2>
          <form className="login-user-select-form" onSubmit={this.handleSubmit}>
            <select ref="userSelected" id="user-select" className='login-user-select'>
              {this.props.userKeys.map((appUser) => {
                  return <option key={appUser}
                                 className='login-user-select'
                                 value={appUser}>
                            {this.props.users[appUser].name}
                         </option>
                }
              )}
            </select>
            <button className='login-button'>Sign In</button>
          </form>
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch)  {
  return {
    setUser: function(selectedUser) {
      dispatch(setAuthedUser(selectedUser));
    }
  };
}

function mapStateToProps ({users}) {

  return {
    userKeys: Object.keys(users),
    users: users,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)