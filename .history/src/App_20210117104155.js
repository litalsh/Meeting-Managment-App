import './App.css';
import React from 'react';
import Stack from './components/Stack/Stack';
import GlobalTime from './components/GlobalTime/GlobalTime';
import MeetingContextProvider from './Context/store';
import Heap from './components/Heap/Heap';
import Notes from './components/Notes/Notes';
import CurrentTask from './components/CurrentTask/CurrentTask';
import Header from './components/Header/Header';
import { BrowserRouter, Router } from 'react-router-dom';


function App() {
  
  return (
    <div className="App"> 
      <MeetingContextProvider>
        <Header />
        <CurrentTask />
        <Stack />
        <Notes />
        <Heap />
        <Router>
          
        </Router>
      </MeetingContextProvider>
    </div>
  );
}

export default App;
