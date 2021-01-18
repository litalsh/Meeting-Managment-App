import React, { useContext, useState } from 'react';
import './Notes.css';
import { meetingContext } from '../../Context/store';
import Note from './Note';


const Notes = () => {
  const { stack, setStack } = useContext(meetingContext);

  const newNoteHandler = (event) => {
    if (event.which === 13 && event.target.value !== '') {
      let temp = [...stack];
      temp[temp.length - 1].notes ? temp[temp.length - 1].notes.push(event.target.value) : temp[temp.length - 1].notes = [event.target.value];
      setStack(temp);
      event.target.value = '';
    };
  }

  return (
    <fieldset className='notes-container'>
      <legend>Notes</legend>
      <input type='text' placeholder="Add a note to current stack" className='notes-input' onKeyDown={newNoteHandler} aria-flowto='stack-input' />
      <dl>
        {stack[0] !== undefined ? stack.map((task, id) => (
          task.notes !== undefined ?
          <Note
            key={id}
            title={task.title}
            notes={task.notes}
          /> : null
        )) : null}
      </dl>
    </fieldset>
  );
}

export default Notes;