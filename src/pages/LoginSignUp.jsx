import React from 'react'
import './Styles/LoginSignUp.css'

const LoginSignUp = () => {
  return (
    <div className='login_signup'>
      <div className="login_signup_container">
        <h1>Sign Up</h1>
        <div className="login_signup_fields">
          <input type="text" placeholder='Your Name'/>
          <input type="email" placeholder='Email Address'/>
          <input type="password" placeholder='Password'/>
        </div>
        <button>Continue</button>
        <p className='login_signup_login'>Already have an account? <span>Login Here</span></p>
        <div className='login_signup_agree'>
          <input type="checkbox" />
          <p>By continuing, i agree to the terms of use & privacy politics </p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignUp