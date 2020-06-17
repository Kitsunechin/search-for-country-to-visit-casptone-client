import React from 'react';
import { Route, Switch } from 'react-router-dom'

import config from './config'
import './App.css';
import AppContext from './AppContext';

import NotFoundPage from './NotFoundPage'
import LandingPage from './LandingPage'
import Navigation from './Navigation'
import BucketListPage from './BucketListPage'
import VisitedPage from './VisitedPage'
import SideDrawer from './SideDrawer'
import Backdrop from './Backdrop'


export default class App extends React.Component {
  
  state = {
    sideDrawerOpen: false,
    // store: STORE,
    notes: [],
    folders: []
  }
  
  drawerToggleButton = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen}
    })
  }

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false})
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
    notesError: this.notesError,
    drawerToggleButton: this.drawerToggleButton,
  }
  console.log(contextValue)


  let backdrop;

  if (this.state.sideDrawerOpen) {
    backdrop = <Backdrop click={this.backdropClickHandler}/>
  }

  return (
    <AppContext.Provider value={contextValue}>
    <div style={{height:'100%'}} className="App">
      <Navigation />
      <SideDrawer show={this.state.sideDrawerOpen}/>
      {backdrop}
      <main className='Main-view'>
        <Switch>
          <Route exact path='/' render={() => {
            return <LandingPage />
          }}/>
          <Route path='/visited' render={() => {
            return <VisitedPage />
          }}/>
          <Route path='/bucket-list' render={() => {
            return <BucketListPage />
          }}/>
          />
         <Route component={NotFoundPage} />
        </Switch>
      </main>
    </div>
    </AppContext.Provider>
  );
 }
}

