import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
function Login() {
  return (
    <div className="login">
    <Link to='/'>
      <img className="login__logo"
      src="https://thumbs.dreamstime.com/b/amazon-155631949.jpg"  
      alt="AMAZON"   
    />
    
    </Link>
       <form className="login">
          <h3 className="login__title">SignIn</h3>
          <label className="login__label">Enter your Email Id</label>
          <input className="login__email" type="email" placeholder="Enter Email Id"/>
          <label className="login__label">Enter your Password</label>
          <input  className="login__passord" type="password" placeholder="password" />
          <button>Login</button>
          <p className="login__text">New To Amazon ?</p>
       </form>
      
       
        <button>Create Your Amazon Account</button>
        
        
    </div>
  )
}

export default Login
