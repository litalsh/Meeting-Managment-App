import React, { useContext } from 'react';
import Task from '../Task/Task';
import {meetingContext} from '../../Context/store';
import { v4 as uuidv4 } from "uuid";


const Stack = () => {

  const stack = useContext(meetingContext);

  const newStackHandler = (event) => {
    if (event.which === 13 && event.target.value !== '') {
      setStack([
        ...stack,
        { id: uuidv4(), type: 'stack', topic: event.target.value, time: 0 }
      ]);
      event.target.value = '';
      console.log(stack)
      // setTimer(stack[0] !== undefined ? stack[stack.length - 1].time * 60 : null);
    };
  };

  return (
    <fieldset className="stack-container">
      <legend>Stack</legend>
      <ul className="stack-list">
        {stack !== undefined ? stack.map((task, id) => (
          <Task key={id} />
        )) : null}
      </ul>
      <input type="text" placeholder="Add a task to stack" onKeyDown={newStackHandler} className='stack-input' autoFocus aria-flowto='heap-input' />
    </fieldset>
  );
}

export default Stack;

