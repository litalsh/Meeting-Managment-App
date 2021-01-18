import React, {useState, useContext, createContext} from 'react';

export const meetingContext = createContext();

const MeetingContextProvider = (props) => {
  
  
  return ( 
    <meetingContext.Provider>
      {props.children}
    </meetingContext.Provider>
   );
}
 
export default MeetingContextProvider;