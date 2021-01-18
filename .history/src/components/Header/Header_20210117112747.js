import React, { useContext } from 'react';
import GlobalTime from '../GlobalTime/GlobalTime';
import { meetingContext } from '../../Context/store';
import './Header.css';



const Header = () => {

  const { clearAllHandler, endMeetingHandler,downloadSummaryHandler } = useContext(meetingContext);


  return (
    <header className='header'>
      <div className='header-left'>
        <GlobalTime />
        <button className='end-meeting-btn' >End meeting</button>
      </div>
      <div className='header-center'>
        <h5 className="instructions">Ctrl+Shift+X: Removes current stack  |  Double click: Moves the task between lists  |  Alt+S: Start/stop the timer</h5>
      </div>
      <div className='header-right'>
        <button className='clear-btn' onClick={downloadSummaryHandler}>Clear all</button>
      </div>
    </header>
  );
}

export default Header;