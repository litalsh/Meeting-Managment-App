import React, { useContext, useState } from 'react';
import './Notes.css';
import { meetingContext } from '../../Context/store';
import Note from './Note';


const Notes = () => {
  const { stack, setStack } = useContext(meetingContext);

  const newNoteHandler = (event) => {
    if (event.which === 13 && event.target.value !== '') {
      setStack([
        ...stack,
        { id: uuidv4(), type: 'stack', topic: event.target.value, time: new Date().getTime() }
      ]);
      event.target.value = '';
      console.log(stack)
      setCurrentTaskTimer(Math.floor((new Date().getTime() - new Date().getTime())/1000));
    };
  }



  return ( 
    <fieldset className='notes-container'>
      <legend>Notes</legend>
      <input type='text' placeholder="Add a note to current stack" className='notes-input' onKeyDown={newNoteHandler} aria-flowto='stack-input' />
      <dl>
      {stack[0] !== undefined ? stack.map((task) => (
        <Note 
        title={task.title}
        notes={task.notes}
         />
      )) : null}
      </dl>
    </fieldset>
   );
}
 
export default Notes;