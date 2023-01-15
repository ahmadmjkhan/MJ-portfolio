import React from 'react'
import './footer.css'
import Logofooter from '../../assets/logo.png'
import {IoLogoTwitter} from 'react-icons/io'
import {FiInstagram} from 'react-icons/fi'
import {FaFacebookF} from 'react-icons/fa'

const Footer = () => {
  return (
   <footer>
    <img src={Logofooter} alt="" className='footer_logo' />

    <ul className='permalinks'>
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#testimonials">Testimonials</a></li>
      <li><a href="#contact">Contact</a></li>
      
    </ul>

    <div className="footer_socials">
      <a href=""><FaFacebookF/></a>
      <a href=""><FiInstagram/></a>
      <a href=""><IoLogoTwitter/></a>
    </div>
    
    <div className="footer_copyright">
      <small>&copy; MJ Portfolio. All rights reserved</small>
    </div>
   </footer>

   
  )
}

export default Footer