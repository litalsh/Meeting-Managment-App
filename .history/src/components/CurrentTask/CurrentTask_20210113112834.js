import React, { useState, useEffect, useContext } from 'react';
import { meetingContext } from '../../Context/store';
import './CurrentTask.css';


const CurrentTask = () => {

  const { stack, clock, currentTaskTimer, setCurrentTaskTimer } = useContext(meetingContext);


  useEffect(() => {
    if (stack[0] !== undefined) {
      const id = window.setInterval(() => {
        setCurrentTaskTimer(Math.floor((new Date().getTime() - stack[stack.length - 1].time) / 1000));
      }, 30000);
      return () => window.clearInterval(id);
    }
  }, [currentTaskTimer]);

  let n = 0;
  const [bars, setBars] = useState([]);
  useEffect(() => {
    if (stack[0] !== undefined) {
      const id = window.setInterval(() => {
        n += 1;
        setBars(Array(n));
        console.log(bars, n)
      }, 1000);
      return () => window.clearInterval(id);
    }
  }, [bars]);

  let time = clock(currentTaskTimer);
  console.log('current ', currentTaskTimer);

  const taskExists = () => {
    return (
      <>
        {time.minutes}:{time.seconds}
      </>
    )
  };
  const TimeBar = () => {
    return (
      <div className='time-bars'></div>
    )
  }

  return (
    <div className='current-task-container'>
      <div className='current-timer'><h4>{stack[0] !== undefined ? (taskExists()) : null}</h4></div>
      <div className='current-title'><h1>{stack[0] !== undefined ? stack[stack.length - 1].topic : null}</h1></div>
      <div className='current-task-background'>
        {bars.map((id) => (<TimeBar key={id} />))}
      </div>
    </div>
  );
}

export default CurrentTask;