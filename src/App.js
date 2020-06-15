import React from 'react';
import './App.css';
import Header from './Header'
import SideBar from './SideBar'
import NoteSection from './NoteSection'
// import STORE from './STORE';
import NotFoundPage from './NotFoundPage'
import { Route, Switch } from 'react-router-dom';
import NotePage from './NotePage'
import AddNote from './AddNote'
import AddFolder from './AddFolder'
import FolderPage from './FolderPage'
import NotefulContext from './NotefulContext';
import config from './config'

export default class App extends React.Component {
  
  state={
    // store: STORE,
    notes: [],
    folders: []
  }
    
  componentDidMount() {
        Promise.all([
            fetch(`${config.API_ENDPOINT}/notes`),
            fetch(`${config.API_ENDPOINT}/folders`)
        ])
            .then(([notesRes, foldersRes]) => {
                if (!notesRes.ok)
                    return notesRes.json().then(e => Promise.reject(e));
                if (!foldersRes.ok)
                    return foldersRes.json().then(e => Promise.reject(e));

                return Promise.all([notesRes.json(), foldersRes.json()]);
            })
            .then(([notes, folders]) => {
              console.log(folders,notes)
                this.setState({notes: notes, folders: folders});
        
            })
            .catch(error => {
                console.error({error});
            });
    }
    
    addFolder = folder => {
      this.setState({
        folders: [...this.state.folders, folder],
      })
    }
    
    addNote = note => {
      this.setState({
        notes: [...this.state.notes, note],
      })
    }

    handleDeleteNote = noteId => {
      const newNotes = this.state.notes.filter(note => {
        return note.id !== noteId;
      });
  
      this.setState({
        notes: newNotes
      })
    }
  
    addErrorNotes = error => {
      this.setState(error);
    };
  


render() {
  // const {store} = this.state
  // console.log(`these are notes and folders ${this.state.notes}${this.state.folders}`)
  const contextValue = {
    notes: this.state.notes,
    folders: this.state.folders,
    addFolder: this.addFolder,
    addNote: this.addNote,
    deleteNote: this.handleDeleteNote,
    addErrorNotes: this.addErrorNotes,
    notesError: this.notesError
  }
  console.log(contextValue)

  return (
    <NotefulContext.Provider value={contextValue}>
    <div className="App">
      <Header/>
      <main className='Main-view'>
        <SideBar 
        />
        <Switch>
          <Route exact path='/' render={() => {
            return <NoteSection />
          }}/>
          <Route path='/add-note' render={() => {
            return <AddNote />
          }}/>
          <Route path='/add-folder' render={() => {
            return <AddFolder />
          }}/>
          <Route path={"/note/:noteId"}
          render={(routerProps) => {
            // console.log(`router props ${routerProps}`)
            return <NotePage 
            routerProps={routerProps}
            />
          }}/>
          <Route path={"/folder/:folderId"}
          render={(routerProps) => {
            console.log(routerProps)
            console.log(this.state.folders)
            return <FolderPage 
            routerProps={routerProps}
            />
          }}
          // component={FolderPage}
          />
         <Route component={NotFoundPage} />
        </Switch>
      </main>
    </div>
    </NotefulContext.Provider>
  );
 }
}

