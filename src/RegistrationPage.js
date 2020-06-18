import React from 'react'

import './LandingPage.css'
export default class RegistrationPage extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        error: null,
        params: {
          username: '',
          email: '',
          password: ''
        }
      };
    }
    
    validateEmail(inputEmail){
      let outputEmail = inputEmail;
      let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if(!inputEmail.match(mailformat)) {
          outputEmail = ""
      }
      return outputEmail
    }
    validateUsername(inputUsername){
      let outputUsername = inputUsername;
      // only lowercase and uppercase letters and dash
      let userformat = /^[a-zA-Z\-]+$/;
      if(!inputUsername.match(userformat)) {
          outputUsername = ""
      }
      return outputUsername
    }

    validatePassword(inputPassword){
      let outputPassword = inputPassword;
      // at least one number, one lowercase and one uppercase letter
      // at least eight characters that are letters, numbers or the underscore
      let passwordformat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{8,}$/;
      if(!inputPassword.match(passwordformat)) {
          outputPassword = ""
      }
      return outputPassword
    }

    handleSubmit = (e) => {
      e.preventDefault();
      //create an object to store the search filters
      const data = {}

      //get all the from data from the form component
      const formData = new FormData(e.target)

      //for each of the keys in form data populate it with form value
      for (let value of formData) {
          data[value[0]] = value[1]
      }
      console.log(data)
      let {username, email, password} = data
      if (this.validateEmail(email) === '') {
        this.setState({
            error: 'email is not valid'
        })
      }
      if (this.validateUsername(username) === '') {
        this.setState({
            error: 'username is not valid'
        })
      }
      if (this.validatePassword(password) === '') {
        this.setState({
            error: 'password is not valid'
        })
      }
      //assigning the object from the form data to params in the state
      this.setState({
          params: data
      })

      //check if the state is populated with the search params data
      console.log(this.state.params)
    }
  
    render() {
      //if there is an error message display it
      const errorMessage = this.state.error ? <p className="error-message">{this.state.error}</p> : false
      return (
        <div className="inner-container">
          <form className="add-user" onSubmit={this.handleSubmit}>
          {errorMessage}
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