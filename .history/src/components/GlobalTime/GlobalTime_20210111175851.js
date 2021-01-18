import React, { useState, useEffect, useContext } from 'react';
import './GlobalTime.css';
import {meetingContext} from '../../Context/store';


const GlobalTime = () => {
  const {clock} = useContext(meetingContext);

  let startingTime = new Date().getTime();
  const [globalTimer, setGlobalTimer] = useState(0);
  let time = clock(globalTimer);

  useEffect(() => {
    const id = window.setInterval(() => {
      setGlobalTimer(Math.floor((new Date().getTime() - startingTime)/1000));
    }, 1000);
    return () => window.clearInterval(id);
    console.log(startingTime)
  })

  return (
    <div className='global-timer'>{time.hours}:{time.minutes}:{time.seconds}</div>
    );
}

export default GlobalTime;