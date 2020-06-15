import React from 'react'
import './SideBar.css'
import SideBarItem from './_SidebarItem'
import {Link} from 'react-router-dom';
import AppContext from './AppContext';

export default class Sidebar extends React.Component {
    static contextType = AppContext
    render() {
        console.log(this.context.folders)
        const folderId = this.context.folders.map(folder => folder.id)
        console.log(folderId)

     return(<div className="SideBarBox">
            {this.context.folders.map((item, i) =>
                <SideBarItem
                    className={item.id === folderId ? 'active' : 'not-active'}
                    key={i}
                    id={item.id}
                    name={item.name}
                    />
            )}
            <Link style={{ textDecoration: 'none' }} to={'/add-folder'}>
                <button>Add Folder</button>
            </Link>
    </div>)}
}
