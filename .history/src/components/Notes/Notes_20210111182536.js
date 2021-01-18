import React, { useContext, useState } from 'react';
import './Notes.css';
import { meetingContext } from '../../Context/store';
import Note from './Note';


const Notes = () => {
  const { stack, setStack, notes, setNotes } = useContext(meetingContext);

  const newNoteHandler = (event) => {
    if (event.which === 13 && event.target.value !== '') {
      let tempStack = [...stack];
      tempStack[tempStack.length - 1].notes ? tempStack[tempStack.length - 1].notes.push(event.target.value) : tempStack[tempStack.length - 1].notes = [event.target.value];
      setStack(tempStack);
      
      let tempNotes = [...notes];
      let noteIndex = tempNotes.findIndex(obj => {return obj.topic === stack[stack.length-1].topic});
      noteIndex === -1 ? tempNotes.push({topic: stack[stack.length-1].topic, notes: [event.target.value], id: stack[stack.length-1].id }) : tempNotes[noteIndex].notes.push(event.target.value);
      setNotes(tempNotes);
      event.target.value = '';
    };
  }

  return (
    <fieldset className='notes-container'>
      <legend>Notes</legend>
      <input type='text' placeholder="Add a note for the current stack" className='notes-input' onKeyDown={newNoteHandler} aria-flowto='stack-input' />
      <dl>
        {notes !== undefined ? notes.map((task, id) => (
          task.notes !== undefined ?
          <Note
            key={id}
            title={task.topic}
            notes={task.notes}
          /> : null
        )) : null}
      </dl>
    </fieldset>
  );
}

export default Notes;