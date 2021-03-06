import React, { useContext } from 'react';
import Task from '../Task/Task';
import { meetingContext } from '../../Context/store';
import MeetingContextProvider from '../../Context/store'


const Stack = () => {

  const {stack, say} = useContext(meetingContext);
  // const say = useContext(meetingContext);

  return (
      <MeetingContextProvider>
      <fieldset className="stack-container">
        {console.log(stack)}
        <legend>Stack</legend>
        <ul className="stack-list">
          {stack !== undefined ? stack.map((task, id) => (
            <Task key={id} />
          )) : null}
        </ul>
        <input type="text" placeholder="Add a task to stack"  className='stack-input' autoFocus aria-flowto='heap-input' />
      </fieldset>
      </MeetingContextProvider>
  );
}

export default Stack;

