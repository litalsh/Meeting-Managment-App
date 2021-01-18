import React from 'react';

const Stack = () => {
  return (  );
}
 
export default Stack;

<fieldset className="task-list stack-list">
        <legend>Stack</legend>
        <ul className="stack-list">
          <>
            {stack[0] !== undefined ? stack.map((task, id) => (
              <Task title={task.topic}
                key={id}
                remove={() => taskRemoveHandler(task.id, task.type)}
                move={() => changeListHandler(task.id, task.type)}
                class={"stack_item"}
                duration={task.duration}
                sliderClass={task.slider}
                sliderControl={() => adjustDurationHandler(task.id)}
                change={value => setTempDuration(value)}
                time = {}
              />
            )) : null}
          </>
        </ul>
        <input type="text" placeholder="Add a task to stack" onKeyDown={newTaskHandler} className='stack-input' autoFocus aria-flowto='heap-input' />
      </fieldset>