import React, { useContext, useState } from 'react';
import './Notes.css';
import { meetingContext } from '../../Context/store';
import Note from './Note';


const Notes = () => {
  const { stack, setStack } = useContext(meetingContext);



  return ( 
    <fieldset className='notes-container'>
      <legend>Notes</legend>
      <input type='text' placeholder="Add a note to current stack" className='notes-input' onKeyDown={newNoteHandler} aria-flowto='stack-input' />
      <dl>
      {stack[0] !== undefined ? stack.map((task) => (
        <Note title={task.title} />
      ))}
      </dl>
    </fieldset>
   );
}
 
export default Notes;