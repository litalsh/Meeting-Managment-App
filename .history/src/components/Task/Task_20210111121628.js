import React, { useState, useEffect, useContext } from 'react';
import { meetingContext } from '../../Context/store';
import './Task.css';

const Task = (props) => {
  const { stack, heap, clock } = useContext(meetingContext);
  const [timer, setTimer] = useState(Math.floor((new Date().getTime() - props.time) / 1000));

  let time = clock(timer);
  
  useEffect(() => {
    const id = window.setInterval(() => {
      setTimer(Math.floor((new Date().getTime() - props.time) / 1000));
    }, 30000);
    console.log(timer)
    return () => window.clearInterval(id);
  }, [timer])


  return (
    <li className='task-item' key={props.id} onDoubleClick={props.changeList}>
      {props.type !== 'heap' ? <div> <span className="duration-display" > {time.minutes}:{time.seconds} </span> </div> : null}
      <label className='task-title' >{props.title}</label>
      <button className="remove" onClick={props.remove}>X</button>
    </li>
  );
}

export default Task;

