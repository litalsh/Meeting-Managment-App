import React, { useState, useEffect, useContext } from 'react';
import {meetingContext} from '../../Context/store';
import './Task.css';

const Task = (props) => {
  const {stack, heap, clock} = useContext(meetingContext);
  const [timer, setTimer] = useState(0);

    useEffect(() => {
      
      const id = window.setInterval(() => {
        setTimer(timer => timer = timer + 1);
      }, 1000);
      return () => window.clearInterval(id);
    })

    let time = clock(timer);

  return (
    <li className='task-item' key={props.id}  onDoubleClick={props.changeList}>
      {props.type !== 'heap' ? <div> <span className="duration-display" > {time.minutes}:{time.seconds} </span> </div> : null}
      <label className='task-title' >{props.title}</label>
      <button className="remove" onClick={props.remove}>X</button>
    </li>
  );
}

export default Task;

