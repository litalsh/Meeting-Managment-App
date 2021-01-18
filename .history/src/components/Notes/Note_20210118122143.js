import React from 'react';

const Note = (props) => {
  return (
    <>
      <dt>{props.title}:</dt>
      {props.notes.map((note) => (
        <dd key={props.id}>{note}</dd>
      ))}
    </>
  );
}

export default Note;