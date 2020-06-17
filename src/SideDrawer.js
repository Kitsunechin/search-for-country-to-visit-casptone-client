import React from 'react'
import {NavLink} from 'react-router-dom'

import './SideDrawer.css'

const SideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open'
    }
    return(
    <nav className={drawerClasses}>
        <div className='menu-list'>
        <NavLink className='nav-link' to='/'><h3>Home</h3></NavLink>
        <NavLink className='nav-link' to='/visited'><h3>Visited</h3></NavLink>
        <NavLink className='nav-link' to='/bucket-list'><h3>Bucket List</h3></NavLink>
        </div>
    </nav>
    )
}
export default SideDrawer
