import React, { useContext } from 'react';
import Task from '../Task/Task';
import { meetingContext } from '../../Context/store';
import MeetingContextProvider from '../../Context/store';

const Heap = () => {
  const { heap, newHeapHandler, taskRemoveHandler } = useContext(meetingContext);

  
  return (
    <MeetingContextProvider>
    <fieldset className="heap-container">
      <legend>Heap</legend>
      <input type="text" placeholder="Add a task to heap" onKeyDown={newHeapHandler} className='heap-input' aria-flowto='stack-input' />
      <ul className="heap-list">
        {heap[0] !== undefined ? heap.map((task, id) => (
          <Task />
        )) : null}
      </ul>
    </fieldset>
    </MeetingContextProvider>
  );
}

export default Heap;