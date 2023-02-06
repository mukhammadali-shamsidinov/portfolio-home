import React from 'react'
import home from '../../image/home-icon.svg'
import Copy from './copy'
import './footer.css'
const Footer = () => {
  return (
    <>
     <footer>
      <div className="footer-logo">
        <img src={home} alt="" />
        <p>Homeverse.io is a gated community <br /> with a great location. Located <br /> downtown, you’re within walking <br /> distance of Parks, and the...View More</p>
      </div>
      <div className="contact">
        <h3>Contact Us</h3>
 
          <p>Deam home villas San Diego, CA, USA</p>
          <p>025-777-3067</p>
          <p>admin@thehomeverse.io</p>
  
      </div>
      <div className="socials">
        <h3>Follow Us</h3>
        <div className='icons'>
        <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-twitter"></i>
        </div>
        <select name="" id="">
          <option value="fa-regular fa-globe" className='fa'>🌐 USA</option>
          <option value="fa-regular fa-globe" class="fa">🌐 UZB</option>
        </select>
      </div>
      {/* <div className="social">
        <h3>Follow Us</h3>
        <ul className="icons">
       <li> <i class="fa-brands fa-instagram"></i></li>
<li>        <i class="fa-brands fa-youtube"></i></li>
       <li> <i class="fa-brands fa-twitter"></i></li>
        </ul>
      </div> */}
    </footer>
    <hr />
    <Copy />
    </>
   
  )
}

export default Footer