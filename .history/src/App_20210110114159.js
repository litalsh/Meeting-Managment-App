import './App.css';
import React, { useState, useEffect } from 'react';
import Stack from './components/Stack/Stack';
import MeetingContextProvider from './Context/store';


function App() {
  
  return (
    <div className="App"> {minutes}:{seconds}
      <MeetingContextProvider>
        <Stack />
      </MeetingContextProvider>
    </div>
  );
}

export default App;
