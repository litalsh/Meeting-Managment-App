import React, {useState, createContext} from 'react';

export const meetingContext = createContext();

const MeetingContextProvider = (props) => {
 const [stack, setStack] = useState([]);
 const [heap, setHeap] = useState([]);
 const [notes, setNotes] = useState([]); 
  
  return ( 
    <meetingContext.Provider value = {{}}>
      {props.children}
    </meetingContext.Provider>
   );
}
 
export default MeetingContextProvider;