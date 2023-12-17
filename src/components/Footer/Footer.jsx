import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div>
        <div className="footer">
          <h3>Max Clothes</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos assumenda quis quia eum deserunt at laboriosam molestias aperiam.</p>
          <ul className="social">
              <li><i className="fa-brands fa-facebook"></i></li>
              <li><i className="fa-brands fa-instagram"></i></li>
              <li><i className="fa-brands fa-tiktok"></i></li>
              <li><i className="fa-brands fa-discord"></i></li>
          </ul>
        </div>
        <div className="copyright">
            <p>copyright &copy;2023 maxclothes. designed by <span>Maxzett</span></p>
        </div>
    </div>
  )
}

export default Footer