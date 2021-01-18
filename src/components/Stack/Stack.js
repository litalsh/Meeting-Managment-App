import React, { useContext } from 'react';
import Task from '../Task/Task';
import { meetingContext } from '../../Context/store';
import './Stack.css';

const Stack = () => {

  const { stack, newStackHandler, taskRemoveHandler, changeListHandler } = useContext(meetingContext);

  return (
    
      <fieldset className="stack-container">
        {console.log('stack: ', stack)}
        <legend>Stack</legend>
        <ul className="stack-list">
          {stack !== undefined ? stack.map((task, id) => (
            <Task key={id} 
            time={task.time} 
            title={task.topic} 
            type={task.type} 
            remove={() => taskRemoveHandler(task.id, task.type)}
            changeList={() => changeListHandler(task.id, task.type)} />
          )) : null}
        </ul>
        <input type="text" placeholder="Add a task to stack" onKeyDown={newStackHandler} className='stack-input' autoFocus aria-flowto='heap-input' />
      </fieldset>
    
  );
}

export default Stack;

