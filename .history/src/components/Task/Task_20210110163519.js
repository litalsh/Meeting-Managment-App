import React, { useState, useEffect, useContext } from 'react';
import {meetingContext} from '../../Context/store';
import './Task.css';

const Task = (props) => {
  const {stack, heap, changeListHandler} = useContext(meetingContext);
  const [timer, setTimer] = useState(0);

    useEffect(() => {
      
      const id = window.setInterval(() => {
        setTimer(timer => timer = timer + 1);
      }, 1000);
      return () => window.clearInterval(id);
    })

  let minutes = Math.floor(timer / 60);
  let seconds = Math.abs(timer % 60);
  minutes = minutes.toString().length === 1 ? "0" + minutes : minutes;
  seconds = seconds.toString().length === 1 ? "0" + seconds : seconds;

  return (
    <li className='task-item' key={props.id} onDoubleClick={props.move} }>
      {props.type !== 'heap' ? <div> <span className="duration-display" > {minutes}:{seconds} </span> </div> : null}
      <label className='task-title'>{props.title}</label>
      <button className="remove" onClick={props.remove}>X</button>
    </li>
  );
}

export default Task;

