import React from 'react'
import './Styles/Contact.css'

const Contact = () => {
  
  return (
    <div className='contact'>
      <div className="contact_container">
        <h1>Contact</h1>
        <div className='contact_fields'>
          <input type="text" placeholder="Name and Surname" required/>
          <input type="tel" placeholder="Cell Phone" required/>
          <input type="email" placeholder="Email" required/>
          <textarea id="comentario" cols="30" rows="5" placeholder="Comentarios"></textarea>
        </div>
        <button>Submit</button>
      </div>
    </div>
  )
}

export default Contact