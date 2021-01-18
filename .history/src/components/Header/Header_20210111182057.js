import React from 'react';
import GlobalTime from '../GlobalTime/GlobalTime';

const Header = () => {
  
  return ( 
    <div className='header'>
      <div className='header-left'>
        <GlobalTime />
      </div>
    </div>
   );
}
 
export default Header;