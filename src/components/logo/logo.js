import React from 'react';
import Tilt from 'react-tilt';
import './logo.css';

const Logo = () => {
  return (
    <div className='ma4 mt0'>
      <Tilt className="Tilt" options={{ max : 50 }} style={{ height: 150, width: 150 }} >
        <div className="Tilt-inner logo"><span className='logo'>👽</span></div>
      </Tilt>
    </div>
  );
}

export default Logo;
