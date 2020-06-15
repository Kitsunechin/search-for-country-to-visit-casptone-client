import React from 'react'
import './NotePage.css'
import {Link} from 'react-router-dom';
import config from './config'
import NotefulContext from './NotefulContext';

export default class NoteItems extends React.Component {
    static contextType = NotefulContext

    handleDeleteNote = (event) => {
        const noteNum = this.props.match.params
        this.props.history.push(`/`)
        const noteStr = Object.values(noteNum).toString()
        const noteId = Number(noteStr);
    
        fetch(`${config.API_ENDPOINT}/notes/${noteId}`, {
          method: 'DELETE',
        })
          .then(res => {
            if (!res.ok) {
              throw new Error(res.statusText)
            }
          })
          .then(() => {
            this.context.deleteNote(noteId)
          })
          .catch(error => {
            console.error({ error })
          })
      }
      render(){
        return(
            <div className='item-note'>
                <Link style={{ textDecoration: 'none' }} to={`/note/${this.props.id}`}>
                <h1 className='title_note'>{this.props.title}</h1>
                </Link>
                <p>Date modified: {(this.props.modified).slice(0, 10)}</p>
                <button
                    type="button"
                    id='delete-note'
                    onClick={() => this.handleDeleteNote(this.props.id, this.context.deleteNote)}>
                    Delete Note
        </button>
            </div>
        )
}}