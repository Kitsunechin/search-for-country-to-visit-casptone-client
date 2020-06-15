import React from 'react'
import NoteItems from './NoteItems'
import {Link} from 'react-router-dom';
import NotefulContext from './NotefulContext';

class NoteSection extends React.Component {
// console.log(props)
static contextType = NotefulContext
render(){
  return(
        (<div className="NoteBox">
            <div className="Main-Content">
            {this.context.notes.map((item, i) =>
          <NoteItems
            key={i} 
            id={item.id}
            title={item.name}
            modified={item.modified}
            />
          )}
            </div>
            <Link style={{ textDecoration: 'none' }} to={'/add-note'}>
                <button>Add Note</button>
            </Link>
        </div>)
  )}    
}
export default NoteSection