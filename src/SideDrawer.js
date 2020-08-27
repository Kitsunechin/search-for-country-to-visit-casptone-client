import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

import TokenService from './services/token-service.js';

import './SideDrawer.css';

class SideDrawer extends Component {
    logOutClick = () => {
        console.log('Logging out')
        TokenService.clearAuthToken()
        TokenService.getUserId = (id) => {
        }
    
        window.location='/'
      }
    render() {
        let drawerClasses = 'side-drawer';
    if (this.props.show) {
        drawerClasses = 'side-drawer open'
    }
    return(
    <nav className={drawerClasses}>
        <div className='menu-list'>
        <NavLink className='nav-link' to='/'><h3>Home</h3></NavLink>
        <NavLink className='nav-link' to='/visited'><h3>Visited</h3></NavLink>
        <NavLink className='nav-link' to='/bucket-list'><h3>Bucket List</h3></NavLink>
        <NavLink className='nav-link' to="/" onClick={this.logOutClick}><h3>Log Out</h3></NavLink>
        </div>
    </nav>
    )
    }
}
export default SideDrawer
