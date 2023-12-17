import React from 'react'
import './Offers.css'
import offers_image from '../assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers_left">
            <h2>Exclusive</h2>
            <h2>Offers For You</h2>
            <p>ONLY ON MAX CLOTHES</p>
            <button>Check now</button>
        </div>
        <div className="offers_right">
            <img src={offers_image} alt="" />
        </div>
    </div>
  )
}

export default Offers