import React from 'react';
import { Route, Switch, Redirect} from 'react-router-dom'

import config from './config'
import './App.css';
import AppContext from './AppContext';
import TokenService from './services/token-service.js';

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
  }
  /////neeeded//////
  drawerToggleButton = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen}
    })
  }

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false})
  }
  //////////////////////

  
    addErrorNotes = error => {
      this.setState(error);
    };


render() {
  // const {store} = this.state
  // console.log(`these are notes and folders ${this.state.notes}${this.state.folders}`)
  const contextValue = {
    notesError: this.notesError,
    drawerToggleButton: this.drawerToggleButton, ///needed
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
            return (TokenService.hasAuthToken()
              ? <VisitedPage />
              : <Redirect to={{pathname: '/'}} />)
          }}/>
          <Route path='/bucket-list' render={() => {
              return (TokenService.hasAuthToken()
              ? <BucketListPage />
              : <Redirect to={{pathname: '/'}} />)
          }} />
          />
         <Route component={NotFoundPage} />
        </Switch>
      </main>
    </div>
    </AppContext.Provider>
  );
 }
}

