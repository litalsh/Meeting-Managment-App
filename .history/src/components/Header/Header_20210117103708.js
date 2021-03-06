import React, { useContext } from 'react';
import GlobalTime from '../GlobalTime/GlobalTime';
import { meetingContext } from '../../Context/store';
import './Header.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const Header = () => {

  const { clearAllHandler, endMeetingHandler } = useContext(meetingContext);


  return (
    <header className='header'>
      <div className='header-left'>
        <GlobalTime />
        <Router><button className='end-meeting-btn' ><Link to='/template'>End meeting</Link></button></Router>
      </div>
      <div className='header-center'>
        <h5 className="instructions">Ctrl+Shift+X: Removes current stack  |  Double click: Moves the task between lists  |  Alt+S: Start/stop the timer</h5>
      </div>
      <div className='header-right'>
        <button className='clear-btn' onClick={clearAllHandler}>Clear all</button>
      </div>
    </header>
  );
}

export default Header;