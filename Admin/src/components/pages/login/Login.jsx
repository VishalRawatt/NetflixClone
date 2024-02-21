import { useState } from 'react';
import './login.css' ;

export default function Login() {
    const [email, setEmail] = useState("") ;
    const [password, setPassword] = useState("") ;

    const handleLogin = (e) =>{
        e.preventDefault() ;
    }
  return (
    <div className='login'>
        <form className="loginForm">
            <input type="email" placeholder='email' className="loginInput" onChange={(e)=>setEmail(e.target.value)} />
            <input type="password" placeholder='password' className="loginInput"  onChange={(e)=>setPassword(e.target.value)}/>
            <button className="loginButton" onClick={handleLogin}>Login</button>
        </form>
    </div>
  )
}