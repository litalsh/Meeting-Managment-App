import React, { useState, useEffect } from 'react';
import {meetingContext} from '../../Context/store';


const CurrentTask = () => {
  const {stack} = useContext(meetingContext);

  return ( 
    <div className='current-task-container'>
      <div className='current-timer'></div>
      <div className='current-title'><h1></h1></div>
    </div>
   );
}
 
export default CurrentTask;