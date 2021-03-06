import React, { useState, useEffect } from 'react';
import {  } from "meetingCo";

const Task = (props) => {
  const [timer, setTimer] = useState(0)

  if (props.type === heap) {
    useEffect(() => {
      const id = window.setInterval(() => {
        setTimer(timer => timer = stack[stack.length - 1].duration);
      }, 1000);
      return () => window.clearInterval(id);
    })
  }

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

