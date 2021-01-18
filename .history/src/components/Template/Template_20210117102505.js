import React, {useContext} from 'react';

const Template = () => {
  const { stackHistory } = useContext(meetingContext);

  return ( 
    <div className='template-container'>
      <h3>{new Date()}</h3>
      {stackHistory.map((task) => {
        <div key={task.id}><span>{task.}</span></div>
      })}
    </div>
   );
}
 
export default Template;