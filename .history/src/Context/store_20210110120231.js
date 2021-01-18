import React, { useState, createContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { v4 as uuidv4 } from "uuid";


export const meetingContext = createContext();


const MeetingContextProvider = (props) => {

  const [stack, setStack] = useLocalStorage('stack', []);
  const [heap, setHeap] = useLocalStorage('heap', []);
  const [notes, setNotes] = useLocalStorage('notes', []);

  const newStackHandler = (event) => {
    if (event.which === 13 && event.target.value !== '') {
      setStack([
        ...stack,
        { id: uuidv4(), type: stack, topic: event.target.value, time: 0 }
      ]);
      event.target.value = '';
      console.log(stack)
      // setTimer(stack[0] !== undefined ? stack[stack.length - 1].time * 60 : null);
    };
  };

  const newHeapHandler = (event) => {
    if (event.which === 13 && event.target.value !== '') {
      setHeap([
        ...heap,
        { id: uuidv4(), type: heap, topic: event.target.value, time: new Date() }
      ]);
      event.target.value = '';
    };
  };

  const taskRemoveHandler = (id, type) => {
    if (type === stack) {
      const taskIndex = stack.findIndex(task => {
        return task.id === id;
      });
      let tempList;
      type === stack ? tempList = [...stack] : tempList = [...heap];
      tempList.splice(taskIndex, 1);
      type === stack ? setStack(tempList) : setHeap(tempList);
      console.log(tempList)
    };

  }

  const say = 'Hi!'




  return (
    <meetingContext.Provider value={{ stack, setStack, heap, notes, newStackHandler, say, taskRemoveHandler }}>
      {props.children}
    </meetingContext.Provider>
  );
}

export default MeetingContextProvider;