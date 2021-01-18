import React, { useState, useEffect, useContext } from 'react';
import './GlobalTime.css';
import {meetingContext} from '../../Context/store';


const GlobalTime = () => {
  const {clock} = useContext(meetingContext);

  const [globalTimer, setGlobalTimer] = useState(0);
  let time = clock(globalTimer);

  useEffect(() => {
    const id = window.setInterval(() => {
      setGlobalTimer(globalTimer => globalTimer = globalTimer + 60);
    }, 60000);
    return () => window.clearInterval(id);
  })

  return (
    <div className='global-timer'>{time.minutes}:{time.seconds}</div>
    );
}

export default GlobalTime;