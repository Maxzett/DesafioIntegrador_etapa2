import React, { useState } from 'react'
import { FaCartShopping } from "react-icons/fa6";
import './NavBar.css'
import { Link } from 'react-router-dom';
import CartModal from '../CartModal/CartModal';

const NavBar = () => {
  const [menu , setMenu] = useState('')
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const toggleModal = () => {
    setIsOpen((prevState) => !prevState);
    setIsOpenModal(true);
  };

  return (
    <div className='navbar'>
      <div className='nav_logo'>
        <p>MAX CLOTHES</p>
      </div>
      <ul>
        <li onClick={()=>{setMenu('home')}}><Link to='/'>Home</Link>{menu==='home'?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu('about')}}><Link to='/about'>About Us</Link> {menu==='about'?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu('contact')}}><Link to='/contact'>Contact</Link> {menu==='contact'?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu('update')}}><Link to='/update'>Update</Link> {menu==='update'?<hr/>:<></>}</li>
      </ul>
      <div className='nav_login_cart'>
        <Link to='/login'><button>Login</button></Link>
        <button onClick={toggleModal}>
          <FaCartShopping style={{ cursor: "pointer" , fontSize: '30px' , justifyContent: 'center'}} />
          {isOpen && (<CartModal isOpen={isOpenModal}/>)}
        </button>
      </div>
    </div>
  )
}
export default NavBar