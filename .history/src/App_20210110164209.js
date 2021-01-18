import './App.css';
import React from 'react';
import Stack from './components/Stack/Stack';
import GlobalTime from './components/GlobalTime/GlobalTime';
import MeetingContextProvider from './Context/store';
import Heap from './components/Heap/Heap';
import Notes from './components/Notes/Notes';


function App() {
  
  return (
    <div className="App"> 
      <MeetingContextProvider>
        <GlobalTime />
        <Stack />
        <Notes />
        <Heap />
      </MeetingContextProvider>
    </div>
  );
}

export default App;
