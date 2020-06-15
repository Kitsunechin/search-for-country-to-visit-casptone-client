import React from 'react'
import './SideBar.css'
import {Link} from 'react-router-dom';

const SideBarItem = (props) => 
    (<div className="SideBarItem">
        <ul>
            <li>
            <Link style={{ textDecoration: 'none' }} to={`/folder/${props.id}`}>
            {props.name}
            </Link>
            </li>
        </ul>
          
    </div>
    )
export default SideBarItem