import React from 'react'
import './header.css';
import CTA from './CTA';
import ME from '../../assets/me1.png';
import HeaderSocials  from './HeaderSocials';

const Header = () => {
  return (
      <header>
        <div className="container header_container">
          <h4>Hello I'm</h4>
          <h1>Junaid Ahmad</h1>
          <h4 className="text-light">FullStack Web Developer</h4>
          <CTA/>
          <HeaderSocials/>
          <div className='me'>
            <img src={ME} alt="not found" />

          </div>

          <a href="#contact" className='scroll_down'>Scroll Down</a>
        </div>
      </header>
  )
}

export default Header