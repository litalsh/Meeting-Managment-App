import './App.css';
import React from 'react';
import Stack from './components/Stack/Stack';
import GlobalTime from './components/GlobalTime/GlobalTime';
import MeetingContextProvider from './Context/store';
import Heap from './components/Heap/Heap';
import Notes from './components/Notes/Notes';
import CurrentTask from './components/CurrentTask/CurrentTask';
import Header from './components/Header/Header';
import { Route, BroeserRouter, BrowserRouter } from 'react-router-dom';
import Template from './components/Template/Template';


function App() {
  
  return (
    <BrowserRouter>
    <div className="App"> 
      <MeetingContextProvider>
        <Header />
        <CurrentTask />
        <Stack />
        <Notes />
        <Heap />
        <Route path='/template'
      </MeetingContextProvider>
    </div>
    </BrowserRouter>
  );
}

export default App;
