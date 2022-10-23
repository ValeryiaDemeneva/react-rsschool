import React from "react";
import './Footer.css';
import { github, rsschool } from "../../data/index";
const Footer = (): JSX.Element => {
  return <div className='footer'>
    <div>
      <a href='http://github.com/ValeryiaDemeneva'>
        <img src= {github} alt='github'></img>
      </a>
    </div>
    <div>2022</div>
    <div> <a href='https://rs.school/react/'>
      <img src= {rsschool} alt='rsschool'></img>
    </a></div>
  </div>
};

export default Footer;
