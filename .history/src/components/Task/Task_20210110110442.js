import React, { useState, useEffect, useContext } from 'react';
import {meetingContext} from '../../Context/store';

const Task = (props) => {
  const {stack, heap} = useContext(meetingContext);
  const [timer, setTimer] = useState(0)

  const taskIndex = stack.findIndex(task => {
    return task.id === props.id;
  });
  

    useEffect(() => {
      
      const id = window.setInterval(() => {
        setTimer(timer => timer = props.time);
      }, 1000);
      return () => window.clearInterval(id);
    })

  let minutes = Math.floor(timer / 60);
  let seconds = Math.abs(timer % 60);
  minutes = minutes.toString().length === 1 ? "0" + minutes : minutes;
  seconds = seconds.toString().length === 1 ? "0" + seconds : seconds;

  return (
    <li className={props.taskTypeClass} key={props.id} onDoubleClick={props.move}>
      {props.type === 'heap' ? <div> <span className="duration-display" > {minutes}:{seconds} </span> </div> : null}
      <label className={props.checked}>{props.title}</label>
      <button className="remove" onClick={props.remove}>X</button>
    </li>
  );
}

export default Task;

