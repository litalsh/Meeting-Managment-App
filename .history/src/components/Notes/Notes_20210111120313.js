import React from 'react';
import './Notes.css';

const Notes = () => {
  return ( 
    <fieldset className='notes-container'>
      <legend>Notes</legend>
      <input type='text' placeholder="Add a note to current stack" />
      <dl>

      </dl>
    </fieldset>
   );
}
 
export default Notes;