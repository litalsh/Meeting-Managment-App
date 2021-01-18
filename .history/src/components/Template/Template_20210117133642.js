import React, { useContext } from 'react';
import Note from '../Notes/Note';
import { meetingContext } from '../../Context/store';


const Template = () => {
  const { stackHistory, notes, heap, Down } = useContext(meetingContext);

  return (
    <div className='template-container'>
      {/* <h3>{new Date()}</h3> */}
      {console.log(stackHistory)}
      <h3>Stack</h3>
        <ul>
          {stackHistory.map((task) => (<li key={task.id}>{task.time} {task.topic}</li>))}
        </ul>
      <h3>Notes</h3>
      <dl>
        {notes.map((task, id) => (
          <Note
            key={id}
            title={task.topic}
            notes={task.notes}
          />
        ))}
      </dl>
      <h3>Heap</h3>
      <ul>
          {heap.map((task) => (<li key={task.id}>{task.topic}</li>))}
        </ul>
        <button>Download summary</button>
    </div>
  );
}

export default Template;