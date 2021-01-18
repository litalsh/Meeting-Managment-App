import React, { useContext } from 'react';
import Task from '../Task/Task';
import { meetingContext } from '../../Context/store';
import MeetingContextProvider from '../../Context/store';
import './Heap.css';

const Heap = () => {
  const { heap, newHeapHandler, taskRemoveHandler } = useContext(meetingContext);


  return (
    <MeetingContextProvider>
      <fieldset className="heap-container">
        <legend>Heap</legend>
        <input type="text" placeholder="Add a task to heap" onKeyDown={newHeapHandler} className='heap-input' aria-flowto='stack-input' />
        <ul className="heap-list">
          {heap[0] !== undefined ? heap.map((task, id) => (
            <Task key={id} title={task.topic} type={task.type} remove={() => taskRemoveHandler(task.id, task.type)} changeList={() => } />
          )) : null}
        </ul>
      </fieldset>
    </MeetingContextProvider>
  );
}

export default Heap;