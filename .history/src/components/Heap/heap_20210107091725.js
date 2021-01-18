import React from 'react';

const Heap = () => {
  return ( 
    <fieldset className="task-list heap-list-container">
    <legend>Heap</legend>
    <input type="text" placeholder="Add a task to heap" onKeyDown={newHeapHandler} className='heap-input' aria-flowto='stack-input' />
    <ul className="heap-list">
      <>
        {heap[0] !== undefined ? heap.map((task, id) => (
          <Task title={task.topic}
            key={id}
            remove={() => taskRemoveHandler(task.id, task.type)}
            move={() => changeListHandler(task.id, task.type)}
            class={"heap_item"}
            duration={task.duration}
            sliderClass={task.slider} />
        )) : null}
      </>
    </ul>
  </fieldset>
   );
}
 
export default Heap;