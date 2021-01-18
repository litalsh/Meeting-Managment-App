import React from 'react';

const Note = (props) => {
  return (
    <>
      <dt>{props.title}:</dt>
      {props.notes.map((note, id) => (
        <dd key={id}>{note}</dd>
      ))}
    </>
  );
}

export default Note;