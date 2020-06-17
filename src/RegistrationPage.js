import React from 'react'

import './LandingPage.css'
export default class RegistrationPage extends React.Component {

    constructor(props) {
      super(props);
      this.state = {};
    }
  
    handleSubmit = (e) => {
      e.preventDefault();
    }
  
    render() {
      return (
        <div className="inner-container">
          <form className="add-user" onSubmit={this.handleSubmit}>
          <div className="box">
  
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                className="login-input"
                placeholder="Username"/>
            </div>
  
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" className="login-input" placeholder="Email"/>
            </div>
  
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                className="login-input"
                placeholder="Password"/>
            </div>
            <button
              type="submit"
              >Register</button>
          </div>
          </form>
        </div>
      );
    }
  }