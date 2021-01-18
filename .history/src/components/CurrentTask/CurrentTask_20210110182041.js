import React, { useState, useEffect } from 'react';
import {meetingContext} from '../../Context/store';


const CurrentTask = () => {
  const {stack} = useContext(meetingContext);
  const [currentTimer, setCurrentTimer] = useState(stack[0] !== undefined ? new Date().getTime() - stack[stack.length-1].time.getTime() : 0);
  let minutes = Math.floor(currentTimer / 60);
  let seconds = Math.abs(currentTimer % 60);
  minutes = minutes.toString().length === 1 ? "0" + minutes : minutes;
  seconds = seconds.toString().length === 1 ? "0" + seconds : seconds;

  const taskExists = 

  return ( 
    <div className='current-task-container'>
      <div className='current-timer'></div>
      <div className='current-title'><h1></h1></div>
    </div>
   );
}
 
export default CurrentTask;