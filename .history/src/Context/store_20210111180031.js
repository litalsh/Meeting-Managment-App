import React, { useState, createContext, useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { v4 as uuidv4 } from "uuid";


export const meetingContext = createContext();


const MeetingContextProvider = (props) => {

  const [stack, setStack] = useLocalStorage('stack', []);
  const [heap, setHeap] = useLocalStorage('heap', []);
  const [notes, setNotes] = useLocalStorage('notes', []);
  const [currentTaskTimer, setCurrentTaskTimer] = useState(stack[0] !== undefined ? Math.floor((new Date().getTime() - stack[stack.length - 1].time)/1000) : null);
  


  // Create a new stack task
  const newStackHandler = (event) => {
    if (event.which === 13 && event.target.value !== '') {
      setStack([
        ...stack,
        { id: uuidv4(), type: 'stack', topic: event.target.value, time: new Date().getTime() }
      ]);
      event.target.value = '';
      console.log(stack)
      setCurrentTaskTimer(Math.floor((new Date().getTime() - new Date().getTime())/1000));
    };
  };

  // Create a new heap task
  const newHeapHandler = (event) => {
    if (event.which === 13 && event.target.value !== '') {
      setHeap([
        ...heap,
        { id: uuidv4(), type: 'heap', topic: event.target.value, time: new Date().getTime() }
      ]);
      event.target.value = '';
    };
  };

  // Remove a task
  const taskRemoveHandler = (id, type) => {
    if (type === 'stack') {
      const taskIndex = stack.findIndex(task => {
        return task.id === id;
      });

      let tempList = [...stack];
      tempList.splice(taskIndex, 1);
      setStack(tempList);
      console.log(taskIndex)
      setCurrentTaskTimer(Math.floor((new Date().getTime() - stack[taskIndex-1].time)/1000));
    };

    if (type === 'heap') {
      const taskIndex = heap.findIndex(task => {
        return task.id === id;
      });

      let tempList = [...heap];
      tempList.splice(taskIndex, 1);
      setHeap(tempList)
      console.log(taskIndex)
    };
    return console.log('taskRmoveHandler: ', stack);

  }

  const clock = (time) => {
    let minutes = Math.floor(time / 60);
    let seconds = Math.abs(time % 60);
    let hours = Math.floor(seconds/3600);
    minutes = minutes.toString().length === 1 ? "0" + minutes : minutes;
    seconds = seconds.toString().length === 1 ? "0" + seconds : seconds;
    hours = hours.toString().length === 1 ? "0" + seconds : seconds;
    return ({hours: hours, minutes : minutes, seconds : seconds})
  }

  const keyboardRemoveHandler = (e) => {
    if (e.ctrlKey && e.shiftKey && e.which === 88) {
      let stackLength = stack.length;
      let tempStack = [...stack];
      tempStack.splice(tempStack.length - 1, 1);
      setStack(tempStack);
      setCurrentTaskTimer(Math.floor((new Date().getTime() - stack[stackLength-2 ].time)/1000));
      console.log(currentTaskTimer)
    }
  }

    // remove from stack with the keyboard
    useEffect(() => {
      if (document) {
        document.addEventListener('keydown', keyboardRemoveHandler);
      }
      return () => {
        document.removeEventListener('keydown', keyboardRemoveHandler);
      }
    }, [stack]);

    const changeListHandler = (id, type) => {
      // move task from stack to heap
      if (type === 'stack') {
        const taskIndex = stack.findIndex(task => {
          return task.id === id;
        });
        setHeap([...heap, { id: stack[taskIndex].id, type: 'heap', topic: stack[taskIndex].topic, time: stack[taskIndex].time }]);
  
        let tempStack = [...stack];
        tempStack.splice(taskIndex, 1);
        setStack(tempStack);
        console.log('change to heap ', stack, '  ', heap)
      };
       // move task from heap to stack
    if (type === 'heap') {
      const taskIndex = heap.findIndex(task => {
        return task.id === id;
      });
      setStack([...stack, { id: heap[taskIndex].id, type: 'stack', topic: heap[taskIndex].topic, time: new Date().getTime}]);

      let tempHeap = [...heap];
      tempHeap.splice(taskIndex, 1);
      setHeap(tempHeap);
      console.log('change to stack ', stack, '  ', heap)
    };

    
    }

    
    


  return (
    <meetingContext.Provider value={
      {
        stack,
        setStack,
        heap,
        notes,
        setNotes,
        newStackHandler,
        newHeapHandler,
        taskRemoveHandler,
        changeListHandler,
        clock,
        currentTaskTimer,
        setCurrentTaskTimer
      }
    }>
      {props.children}
    </meetingContext.Provider>
  );
}

export default MeetingContextProvider;