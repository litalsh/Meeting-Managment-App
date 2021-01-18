import React, { useContext } from 'react';
import Task from '../Task/Task';
import { meetingContext } from '../../Context/store';


const Stack = () => {

  const stack = useContext(meetingContext);
  const say = useContext(meetingContext);

  return (
      
      <fieldset className="stack-container">
        {console.log(say)}
        <legend>Stack</legend>
        <ul className="stack-list">
          {stack !== undefined ? stack.map((task, id) => (
            <Task key={id} />
          )) : null}
        </ul>
        <input type="text" placeholder="Add a task to stack" onKeyDown={() => newStackHandler()} className='stack-input' autoFocus aria-flowto='heap-input' />
      </fieldset>
  );
}

export default Stack;

