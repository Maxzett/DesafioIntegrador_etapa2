import React from 'react'
import './Header.css'
import arrow_icon from '../assets/arrow.png'
import header_image from '../assets/hero_image.png'
const Header = () => {
  return (
    <div className='header'>
        <div className='header_left'>
            <h4>NEW ARRIVALS ONLY</h4>
            <p>New</p>
            <p>Collections</p>
            <p>For Everyone</p>
            <div className="header_btn">
                <div>Check Now</div>
                <img src={arrow_icon} alt="arrow" />
            </div>
        </div>
        <div className="header_right">
            <img src={header_image} alt="boots" />
        </div>
    </div>
  )
}

export default Header