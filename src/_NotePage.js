import React from 'react'
// import {Link} from 'react-router-dom';
import './NotePage.css'
import AppContext from './AppContext';

export default class NotePage extends React.Component{
  static contextType = AppContext
  render() {
    // console.log(props)
    const note = this.context.notes.find(note =>
        note.id === this.props.routerProps.match.params.noteId
      )
      console.log(note)
      return (
        <div>
        <div className="content-page">
        <h2>{note.name}</h2>
          <p>{note.content}</p>
          <button onClick={() => this.props.routerProps.history.goBack()}>Go Back</button>
        </div>  
        {/* <Link to={'/'}>
          <button type='button'>
              Back
          </button>
        </Link> */}
        </div>
        
      )

} }
//match id in the url with the specific note that was piceked from the previous page
//display 