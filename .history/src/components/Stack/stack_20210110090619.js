import React, { useContext } from 'react';
import Task from '../Task/Task';
import { meetingContext } from '../../Context/store';
import MeetingContextProvider from '../../Context/store';


const Stack = () => {

  const say = useContext(meetingContext);
  const newStackHandler = useContext(meetingContext);

  return (
    <MeetingContextProvider>
      {console.log(say)}
      <fieldset className="stack-container">
        <legend>Stack</legend>
        <ul className="stack-list">
          {stack !== undefined ? stack.map((task, id) => (
            <Task key={id} />
          )) : null}
        </ul>
        <input type="text" placeholder="Add a task to stack" onKeyDown={() => newStackHandler()} className='stack-input' autoFocus aria-flowto='heap-input' />
      </fieldset>
    </MeetingContextProvider>
  );
}

export default Stack;

