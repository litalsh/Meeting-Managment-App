import React, { useState, useEffect, useContext } from 'react';
import { meetingContext } from '../../Context/store';


const CurrentTask = () => {

  const { stack, clock, currentTaskTimer, setCurrentTaskTimer } = useContext(meetingContext);


  useEffect(() => {
    const id = window.setInterval(() => {
      setCurrentTaskTimer(currentTaskTimer => currentTaskTimer = currentTaskTimer + 1);
    }, 1000);
    return () => window.clearInterval(id);
  })

  let time = clock(currentTimer)

  const taskExists = () => {
    return (
      <>
        {time.minutes}:{time.seconds}
        { console.log(currentTaskTimer)}

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