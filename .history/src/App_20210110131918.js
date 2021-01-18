import './App.css';
import React, { useState, useEffect } from 'react';
import Stack from './components/Stack/Stack';
import GlobalTime from './components/GlobalTime/GlobalTime';
import MeetingContextProvider from './Context/store';
import Heap from './components/Heap/Heap';


function App() {
  
  return (
    <div className="App"> 
      <MeetingContextProvider>
        <GlobalTime />
        <Stack />
        <Heap />
      </MeetingContextProvider>
    </div>
  );
}

export default App;
