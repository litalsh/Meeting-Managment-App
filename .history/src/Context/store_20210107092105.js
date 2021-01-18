import React, { useState, createContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export const meetingContext = createContext();


const MeetingContextProvider = (props) => {
  
  const [stack, setStack] = useLocalStorage('stack', []);
  const [heap, setHeap] = useLocalStorage('heap', []);
  const [notes, setNotes] = useLocalStorage('notes', []);
  const [globalTimer, setGlobalTimer] = useState(0);

  const newTaskHandler = (event) => {
    if (event.which === 13 && event.target.value !== '') {
      setStack([
        ...stack,
        { id: uuidv4(), type: 'stack', topic: event.target.value, duration: 0, slider: 'slider-container' }
      ]);
      event.target.value = '';
      setIsRunning(false);
      console.log(stack)
      setTimer(stack[0] !== undefined ? stack[stack.length - 1].duration * 60 : null);
    };
  };




  return (
    <meetingContext.Provider value={{ stack, heap, notes }}>
      {props.children}
    </meetingContext.Provider>
  );
}

export default MeetingContextProvider;