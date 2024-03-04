import React, { useRef, useState } from 'react'
import './register.scss' ; 
import { useNavigate } from 'react-router-dom';
import axios from "axios";

function Register() {
  const [email, setemail] = useState("") ;
  const [password, setpassword] = useState("") ;
  const [username, setUsername] = useState("") ;
  const navigate = useNavigate() ;

  const emailRef = useRef() ;
  const passwordRef = useRef() ;
  const usernameRef = useRef() ;
  const handleStart = () =>{
    setemail(emailRef.current.value) ;
  }
  const handleFinish = async (e) =>{
    e.preventDefault() ;
    setpassword(passwordRef.current.value) ;
    setUsername(usernameRef.current.value) ;
    try{
      await axios.post("auth/register", {email,username,password}) ;
      navigate("/login") ;
    }catch(e){
    console.log(e) ;
    }
  }

  return (
    <div className='register'>
      <div className="top">
        <div className="wrapper">
        <img className='logo'
        src="https://cdn.geekwire.com/wp-content/uploads/2014/07/Netflix_Logo_Print_FourColorCMYK.png"
        alt='ntfllogo'/>
        <button className="loginButton">
          Sign Up
        </button>
      </div>
      </div>
      <div className="container">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>{
        !email?(
          <div className="input">
          <input type="email" placeholder='Email Address' ref={emailRef}/>
          <button className="registerButton" onClick={handleStart}>Get Started</button>
        </div>
        ):(
          <form className="input">
            <input type='username' placeholder='username' ref={usernameRef} />
          <input type="password" placeholder='Password' ref={passwordRef}/>
          <button className="registerButton" onClick={handleFinish}>Start</button>
        </form>
        )
        }
      </div>
    </div>
  )
}

export default Register
 