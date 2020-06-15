import React from 'react';
import store from './STORE'

const NotefulContext = React.createContext ({
    notes: [],
    folders: [],
    addFolder: () => {},
    addNote: () => {},
    deleteNote: () => {},
})

export default NotefulContext;