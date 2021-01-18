import React, {useContext} from 'react';
import Note from '../Notes/Note';
import { meetingContext } from '../../Context/store';


const Template = () => {
  const { stackHistory, notes, heap } = useContext(meetingContext);

  return ( 
    <div className='template-container'>
      {/* <h3>{new Date()}</h3> */}
      <h3>Stack</h3>
      <dl>
        {stackHistory.map((task, id) => (
          <Note
            key={id}
            title={task.topic}
          />
        ))}
      </dl>
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
      {heap.map((task, id) => {
        <div key={task.id}><span>{task.time}</span><span>{task.topic}</span></div>
      })}
    </div>
   );
}
 
export default Template;