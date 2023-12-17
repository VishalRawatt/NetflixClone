import React, { useRef, useState } from 'react'
import './register.scss' ; 

function Register() {
  const [email, setemail] = useState("") ;
  const [password, setpassword] = useState("") ;
  const emailRef = useRef() ;
  const passwordRef = useRef() ;
  const handleStart = () =>{
    setemail(emailRef.current.value) ;
  }
  const handleFinish = () =>{
    setpassword(passwordRef.current.value) ;
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
 