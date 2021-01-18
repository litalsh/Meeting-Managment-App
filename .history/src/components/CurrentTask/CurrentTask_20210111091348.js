import React, { useState, useEffect, useContext } from 'react';
import { meetingContext } from '../../Context/store';


const CurrentTask = () => {

  const { stack } = useContext(meetingContext);

  const [currentTimer, setCurrentTimer] = useState(stack[0] !== undefined ? new Date().getTime() - stack[stack.length - 1].time : 0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setCurrentTimer(currentTimer => currentTimer = currentTimer + 30);
    }, 30000);
    return () => window.clearInterval(id);
  })

  let minutes = Math.floor(currentTimer  / 60);
  let seconds = Math.abs(currentTimer  % 60);
  minutes = minutes.toString().length === 1 ? "0" + minutes : minutes;
  seconds = seconds.toString().length === 1 ? "0" + seconds : seconds;

  const taskExists = () => {
    return (
      <>
        {minutes}:{seconds}
        { console.log(currentTimer)}

      </>
    )
  }

  return (
    <div className='current-task-container'>
      <div className='current-timer'>{stack[0] !== undefined ? (taskExists()) : null}</div>
      <div className='current-title'><h1>{stack[0] !== undefined ? stack[stack.length - 1].topic : null}</h1></div>
    </div>
  );
}

export default CurrentTask;