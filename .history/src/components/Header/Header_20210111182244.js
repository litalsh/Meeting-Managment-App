import React, { useContext } from 'react';
import GlobalTime from '../GlobalTime/GlobalTime';
import { meetingContext } from '../../Context/store';


const Header = () => {

  const { clearAllHandler } = useContext(meetingContext);

  
  return ( 
    <div className='header'>
      <div className='header-left'>
        <GlobalTime />
        <button className='clear-btn' onClick={clearAllHandler}>Clear all</button>
      </div>
    </div>
   );
}
 
export default Header;