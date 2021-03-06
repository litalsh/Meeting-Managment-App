import './App.css';
import React, { useState, useEffect } from 'react';
import Stack from './components/Stack/Stack';
import MenuContextProvider from './Context/store';

function App() {
  const [globalTimer, setGlobalTimer] = useState(0);
  let minutes = Math.floor(globalTimer / 60);
  let seconds = Math.abs(globalTimer % 60);
  minutes = minutes.toString().length === 1 ? "0" + minutes : minutes;
  seconds = seconds.toString().length === 1 ? "0" + seconds : seconds;

  useEffect(() => {
    const id = window.setInterval(() => {
      setGlobalTimer(globalTimer => globalTimer = globalTimer + 30);
    }, 30000);
    return () => window.clearInterval(id);
  })
  return (
    <MenuContextProvider>
      <div className="App"> {minutes}:{seconds}
        <Stack />
      </div>
    </MenuContextProvider>
  );
}

export default App;
