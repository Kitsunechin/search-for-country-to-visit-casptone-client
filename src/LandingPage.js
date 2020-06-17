import React from 'react'

import './LandingPage.css'
import LoginPage from './LoginPage';
import RegistartionPage from './RegistrationPage';
import Header from './Header';

export default class LandingPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLogin: false,
            isRegister: false
        }
    }

    showLoginBox = () => {
        this.setState({isLoginOpen: true, isRegisterOpen: false});
    }
    
    showRegisterBox = () => {
        this.setState({isRegisterOpen: true, isLoginOpen: false});
    }

    render(){
    return(
        <div className="main-box">
        <Header/>
        <div className="box-controller">
       <div
         className={"controller " + (this.state.isLoginOpen
         ? "selected-controller"
         : "")}
         onClick={this
         .showLoginBox}>
         Login
       </div>
       <div
         className={"controller " + (this.state.isRegisterOpen
         ? "selected-controller"
         : "")}
         onClick={this
         .showRegisterBox}>
         Register
       </div>
     </div>
        <div className="box-container">
        {this.state.isLoginOpen && <LoginPage/>}
        {this.state.isRegisterOpen && <RegistartionPage/>}
       </div>
       </div>
    ) 
}
}