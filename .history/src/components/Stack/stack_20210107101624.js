import React, { useContext } from 'react';
import Task from '../Task/Task';
import {meetingContext} from '../../Context/store';

const Stack = () => {

  const {stack, newStackHandler} = useContext(meetingContext);

  return (
    <fieldset className="stack-container">
      <legend>Stack</legend>
      <ul className="stack-list">
        {stack[0] !== undefined ? stack.map((task, id) => (
          <Task />
        )) : null}
      </ul>
      <input type="text" placeholder="Add a task to stack" onKeyDown={newTaskHandler} className='stack-input' autoFocus aria-flowto='heap-input' />
    </fieldset>
  );
}

export default Stack;

