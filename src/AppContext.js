import React from 'react';
import store from './_STORE'

const AppContext = React.createContext ({
    notes: [],
    folders: [],
    addFolder: () => {},
    addNote: () => {},
    deleteNote: () => {},
    drawerToggleButton: () =>{},
})

export default AppContext;