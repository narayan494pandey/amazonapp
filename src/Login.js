import React, { useState } from 'react'
import { Link , useHistory} from 'react-router-dom'
import './Login.css'
import { auth } from './firebase'
function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email,password)
      .auth(auth=>{
        history.push('/')
      })
      .catch(error => alert(error.message))

  }
  const register = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //console.log(auth);
        if(auth){
          history.push('/')
        }/*else{
          history.push('/login')
        }*/
      }).catch(error => {
        alert(error.message);
      })

  }
  return (
    <div className="login">
      <Link to='/'>
        <img className="login__logo"
          src="https://thumbs.dreamstime.com/b/amazon-155631949.jpg"
          alt="AMAZON"
        />

      </Link>
      <form className="login">
        <h5 className="login__title">SignIn</h5>
        <label className="login__label">Enter your Email Id</label>
        <input className="login__email" type="email" value={email} placeholder="Enter Email Id"
          onChange={e => setEmail(e.target.value)}
        />
        <label className="login__label">Enter your Password</label>
        <input className="login__passord" type="password" value={password} placeholder="password"
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit" onClick={signIn}>Sign In</button>
        <p className="login__text">New To Amazon ?</p>
      </form>


      <button type="submit" onClick={register}>Create Your Amazon Account</button>


    </div>
  )
}

export default Login
