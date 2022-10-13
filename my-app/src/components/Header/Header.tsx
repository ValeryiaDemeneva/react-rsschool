import React from "react";
import './Header.css';

const Header = (): JSX.Element => {
  return <div className ='header'>
    <div className='header-title'>
      <a href='/DreamHouse' className = 'header-link'>DREAMHOUSE</a></div>
    <div className = 'about-as'>
    <a href="/about" className = 'header-link'>About us</a>
    </div>
    <div>
    <a href="/form" className = 'header-link'>Form</a>
    </div>
    <div>
    
    </div>
  </div>;
};

export default Header;
