import React from 'react';
import './Notes.css';
import { meetingContext } from '../../Context/store';


const Notes = () => {
  return ( 
    <fieldset className='notes-container'>
      <legend>Notes</legend>
      <input type='text' placeholder="Add a note to current stack" className='notes-input' onKeyDown={newNoteHandler} aria-flowto='stack-input' />
      <dl>

      </dl>
    </fieldset>
   );
}
 
export default Notes;