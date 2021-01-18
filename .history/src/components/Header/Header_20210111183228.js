import React, { useContext } from 'react';
import GlobalTime from '../GlobalTime/GlobalTime';
import { meetingContext } from '../../Context/store';
import './Header.css'


const Header = () => {

  const { clearAllHandler } = useContext(meetingContext);


  return (
    <header className='header'>
      <div className='header-left'>
        <GlobalTime />
        <button className='end-meeting-btn'>Clear all</button>
      </div>
      <div className='header-center'>

      </div>
      <div className='header-right'>
        <button className='clear-btn' onClick={clearAllHandler}>Clear all</button>
      </div>
    </header>
  );
}

export default Header;