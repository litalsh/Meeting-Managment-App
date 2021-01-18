import React, { useState, createContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export const meetingContext = createContext();


const MeetingContextProvider = (props) => {
  
  const [stack, setStack] = useLocalStorage('stack', []);
  const [heap, setHeap] = useLocalStorage('heap', []);
  const [notes, setNotes] = useLocalStorage('notes', []);
  const [globalTimer, setGlobalTimer] = useState(0);




  return (
    <meetingContext.Provider value={{ stack, heap, notes }}>
      {props.children}
    </meetingContext.Provider>
  );
}

export default MeetingContextProvider;