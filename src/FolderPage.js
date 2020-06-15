import React from 'react'
import {Link} from 'react-router-dom';
import NotefulContext from './NotefulContext';

export default class FolderPage extends React.Component {
  static contextType = NotefulContext

  render() {
    const folder = this.context.folders.find(folder =>
        folder.id === this.props.routerProps.match.params.folderId
      )
    const filteredNotes = this.context.notes.filter(note => note.folderId === folder.id)
    console.log(folder)
    console.log(this.context)
      console.log(filteredNotes)
      const folderNotes = filteredNotes.map(item => {
      return <div key={item.id}>
        <Link style={{ textDecoration: 'none', color: 'white'}} to={`/note/${item.id}`}>
        <h1>{item.name}</h1></Link>
        <p>Date modified: {(item.modified).slice(0, 10)}</p>
        <button>Delete Note</button>
        </div>
      });


      return (
        <div className="contentFolder">
          <h2>{folder.name}</h2>
          <div>{folderNotes}</div>
          <Link style={{ textDecoration: 'none' }} to={'/add-note'}>
                <button>Add Note</button>
          </Link>
        </div>
        
      )
}}