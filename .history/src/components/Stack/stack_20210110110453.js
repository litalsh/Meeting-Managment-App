import React, { useContext } from 'react';
import Task from '../Task/Task';
import { meetingContext } from '../../Context/store';
import MeetingContextProvider from '../../Context/store'


const Stack = () => {

  const {stack, say, newStackHandler} = useContext(meetingContext);

  return (
      <MeetingContextProvider>
      <fieldset className="stack-container">
        {console.log('say: ',say)}
        {console.log('stack: ',stack)}
        <legend>Stack</legend>
        <ul className="stack-list">
          {stack !== undefined ? stack.map((task, id) => (
            <Task key={id} time={time} />
          )) : null}
        </ul>
        <input type="text" placeholder="Add a task to stack" onKeyDown={newStackHandler}  className='stack-input' autoFocus aria-flowto='heap-input' />
      </fieldset>
      </MeetingContextProvider>
  );
}

export default Stack;

