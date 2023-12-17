import React from 'react'
import './Styles/About.css'
import Offers from '../components/Offers/Offers'
const About = () => {
  return (
    <div className='about'>
      <div className="about_header">
        <h4>SEASON '23</h4>
        <h1>Max Clothes</h1>
        <button className="btn">Home</button>
      </div>
      <hr />
      <div className="about_info">
          <h4>ORIGINAL PRODUCTS BY 2023</h4>
          <hr />
          <div className="about_info_container">
            <h1>About Us</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat reprehenderit nihil ut eum vitae quidem iste sapiente placeat incidunt quibusdam laboriosam, rerum eligendi, unde porro, aspernatur vero. Voluptates, labore architecto?</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat reprehenderit nihil ut eum vitae quidem iste sapiente placeat incidunt quibusdam laboriosam, rerum eligendi, unde porro, aspernatur vero. Voluptates, labore architecto?</p>
          </div>
      </div>
      {/* <div className="about_info_cards">
        <div className='card' id='card_1'>
          <h1>Confiability</h1>
        </div>
        <div className='card' id='card_2'>
          <h1>Best Prices</h1>
        </div>
        <div className='card' id='card_3'>
          <h1>Send free</h1>
        </div>
      </div> */}
      <Offers/>
    </div>
  )
}

export default About