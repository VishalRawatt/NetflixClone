import { useContext, useState } from 'react';
import './login.scss' ;
import { login } from '../../authContext/apiCalls';
import { AuthContext } from '../../authContext/AuthContext';

export default function Login() {
  const [email, setEmail] = useState("") ;
  const [password, setPassword] = useState("") ;
  const  {dispatch } = useContext(AuthContext) ;

  const handleLogin = (e) =>{
    e.preventDefault() ;
    login({email,password},dispatch) ;
  }

  return (
    <div className='login'>
      <div className="top">
        <div className="wrapper">
        <img className='logo'
        src="https://cdn.geekwire.com/wp-content/uploads/2014/07/Netflix_Logo_Print_FourColorCMYK.png"
        alt='ntfllogo'/>
      </div>
      </div>
      <div className="container">
        <form>
          <h1>Sign In</h1>
          <input type="email" placeholder='Email or Phone Number' onChange={(e)=>setEmail(e.target.value)}/>
          <input type='password' placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
          <button className="loginButton" onClick={handleLogin}>
            Sign In
          </button>
          <span>New to Netflix ?<b>Sign Up Now.</b></span>
          <small>This page is protected by Google reCAPTCHA to ensure you're not a bot.<b>Learn More</b>.</small>
        </form>
      </div>
    </div>
  )
}
 