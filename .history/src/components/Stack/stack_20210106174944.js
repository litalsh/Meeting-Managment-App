import React from 'react';

const Stack = () => {
  return (  );
}
 
export default Stack;

<fieldset className="stack-container">
        <legend>Stack</legend>
        <ul className="stack-list">
          <>
            {stack[0] !== undefined ? stack.map((task, id) => (
              <Task />
            )) : null}
          </>
        </ul>
        <input type="text" placeholder="Add a task to stack" onKeyDown={newTaskHandler} className='stack-input' autoFocus aria-flowto='heap-input' />
      </fieldset>