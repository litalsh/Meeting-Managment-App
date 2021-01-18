import React, { useState, useEffect, useContext } from 'react';
import {meetingContext} from '../../Context/store';
import './Task.css';

const Task = (props) => {
  const {stack, heap, clock} = useContext(meetingContext);
  const [timer, setTimer] = useState(new Date().getTime() - props.time);

    useEffect(() => {
      
      const id = window.setInterval(() => {
        setTimer(timer => timer = timer + 10);
      }, 30000);
      return () => window.clearInterval(id);
    })

    let minutes = clock(timer).minutes;
    let seconds = clock(timer).seconds;

  return (
    <li className='task-item' key={props.id}  onDoubleClick={props.changeList}>
      {props.type !== 'heap' ? <div> <span className="duration-display" > {minutes}:{seconds} </span> </div> : null}
      <label className='task-title' >{props.title}</label>
      <button className="remove" onClick={props.remove}>X</button>
    </li>
  );
}

export default Task;

