import React from 'react'
import { useState } from 'react';
import { FaUser, FaLock, } from "react-icons/fa";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import {Link ,useNavigate } from 'react-router-dom';
import axios from'axios';

import "../Registration/Signup.css"
const Login = () => {
  const[Username,setUserName]= useState()
  const[password,setPassword]=useState()
  const navigate =useNavigate()
    const handleSumit=(e) => {
      e.preventDefault()
      axios.post('http://localhost:3001/Pages/Login/Login',{Username,password})
      
      .then(result => 
        {console.log(result)
          if(result.data === "Success"){
              navigate('/src/Pages/About')
          }
      })
      .catch(err => console.log(err))
    }

  return (
    <div className='container-sign'>
      <div className='wrapper'>
        <div className="form-box login">
                <form onSubmit={handleSumit}>
                  <h1>LOGIN</h1>
                  <div className="input-box">
                    <input type="text" placeholder='Username' required onChange={(e)=>setUserName(e.target.value)} />
                    <FaUser className='icon' />
                  </div>
                  <div className="input-box">
                    <input type="password" placeholder='Password' required onChange={(e)=>setPassword(e.target.value)}/>
                    <FaLock className='icon' />
                  </div>
                  <div className="remember-forgot">
                    <label><input type="checkbox" />Remember me</label>
                    <Link>Forgot Password?</Link>
                  </div>
                  <button type="submit">Login</button>
      
                  <div className="register-link">
                    <p>Don't have an account? <Link to='/src/Pages/Registration'>Register</Link></p>
                  </div>
                  <div className='back-icon'>
                    <Link to="/"><IoArrowBackCircleOutline /></Link>
                  </div>
                </form>
              </div>
           </div>
    </div>
  )
}

export default Login
