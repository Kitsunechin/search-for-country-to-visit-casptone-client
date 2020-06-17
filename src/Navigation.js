import React from 'react'
import {NavLink} from 'react-router-dom'
import {Link} from 'react-router-dom';

import DrawerToggleButton from './DrawerToggleButton'
import './Navigation.css'


const Navigation = (props) => (
            <div className='outer-nav toolbar'>
            <nav className='toolbar_navigation'>
            <div className='toolbar-toggle'>
                 <DrawerToggleButton click={props.drawerClickHandler}/>
            </div>
                <Link className='nav_logo'to='/'><h2>Logo</h2></Link>
            <div className='spacer'></div>
            <div className='nav'>
                <NavLink className='nav-link' to='/'><h3>Home</h3></NavLink>
                <NavLink className='nav-link' to='/visited'><h3>Visited</h3></NavLink>
                <NavLink className='nav-link' to='/bucket-list'><h3>Bucket List</h3></NavLink>
            </div>
            </nav>
            </div>
)


export default Navigation