import React, {useContext} from 'react';
import Note from '../Notes/Note';
import { meetingContext } from '../../Context/store';


const Template = () => {
  const { stackHistory, notes, heap, clock } = useContext(meetingContext);

  return ( 
    <div className='template-container'>
      {/* <h3>{new Date()}</h3> */}
      {console.log(stackHistory)}
      <h3>Stack</h3>
      <div>
      
        <ul>
          {stackHistory.map((task) => (<li>{task.time}{task.topic}</li>))}
        </ul>
       </div>
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