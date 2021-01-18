import React, {useContext} from 'react';
import Note from '../Notes/Note';
import { meetingContext } from '../../Context/store';


const Template = () => {
  const { stackHistory, notes, heap } = useContext(meetingContext);

  return ( 
    <div className='template-container'>
      {/* <h3>{new Date()}</h3> */}
      <h3>Stack</h3>
      {stackHistory.map((task, id) => {
        <div key={task.id}><span>{task.time}</span><span>{task.topic}</span></div>
      })}
    <h3>Notes</h3>
    <dl>
        {notes[0] !== undefined ? notes.map((task, id) => (
          task.notes !== undefined ?
          <Note
            key={id}
            title={task.topic}
            notes={task.notes}
          /> : null
        )) : null}
      </dl>
      <h3>Heap</h3>
      {heap.map((task, id) => {
        <div key={task.id}><span>{task.time}</span><span>{task.topic}</span></div>
      })}
    </div>
   );
}
 
export default Template;