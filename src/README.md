# Noteful React

## Components Structure
* __Index.js__ (stateless)
    * __App.js__ (statefull)
        * __Header.js__ (stateless) 
        * __SideBar.js__ (statefull) - gets the _"store"_  from the __App.js__
        * __NoteSection.js__ (stateless) - gets the _"store"_  from the __App.js__
        * __AddNote.js__ (statefull) 
        * __AddFolder.js__ (statefull) 
        * __NotePage.js__ (stateless) - gets the _"store"_  and _"routerProps"_ from the __App.js__
        * __FolderPage.js__ (stateless)- gets the _"store"_  and _"routerProps"_ from the __App.js__
        * __NotFoundPage.js__ (stateless)
        * __STORE.js__ (JSON Object)
        
        
       














            * __CircleButton.js__ (stateless) - gets the _"className"_  and the _"children"_ from the __ShowFolders.js__
        * __AddFolder.js__ (stateful) - gets the _"handleSubmit"_ and the _"handleChange"_call back prop from the __App.js__
        * __ShowNotesForFolder.js__ (stateless)  - gets the _"notes"_ from the __App.js__
            * __ShowOneNoteDetails.js__ (stateless) - gets the _"id"_ and the _"name"_  and _"modified"_ from the __ShowNotesForFolder.js__
        * __ShowOneNote.js__ (stateful) - gets the _"note"_ from the __ShowNotes.js__
            * __ShowOneNoteDetails.js__ (stateless) - gets the _"id"_ and the _"name"_  and _"modified"_ from the __ShowOneNote.js__
            * __CircleButton.js__ (stateless) - gets the _"className"_  and the _"children"_ from the __ShowOneNote.js__
        * __AddNote.js__ (stateful)  - gets the _"handleSubmit"_ and the _"handleChange"_call back prop from the __App.js__
        * __dummy-store.js__ (stateless) 
            