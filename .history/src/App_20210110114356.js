import './App.css';
import React, { useState, useEffect } from 'react';
import Stack from './components/Stack/Stack';
import GlobalTime from './components/GlobalTime/GlobalTime';
import MeetingContextProvider from './Context/store';


function App() {
  
  return (
    <div className="App"> 
      <MeetingContextProvider>
        <GlobalTime />
        <Stack />
      </MeetingContextProvider>
    </div>
  );
}

export default App;
