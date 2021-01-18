import React, {useContext} from 'react';

const Template = () => {
  const { stackHistory, notes, heap } = useContext(meetingContext);

  return ( 
    <div className='template-container'>
      <h3>{new Date()}</h3>
      <h3>Stack</h3>
      {stackHistory.map((task) => {
        <div key={task.id}><span>{task.time}</span><span>{task.topic}</span></div>
      })}
    </div>
   );
}
 
export default Template;