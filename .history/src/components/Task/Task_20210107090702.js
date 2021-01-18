import React, { useState, useEffect } from 'react';

const Task = () => {
  return (  );
}
 
export default Task;

<li className={props.class} key={props.id} onDoubleClick={props.move}>
    <div className={props.displayClass}>
      <span className="duration-display" >{minutes}:{seconds}</span>
    </div>
    <label className={props.checked}>{props.title}</label>
    <button className="remove" onClick={props.remove}>X</button>
  </li>