import React from 'react'
import { useState } from 'react';
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import {Link ,  useNavigate } from 'react-router-dom';
import axios from'axios';
import "./Signup.css"
const Signup = () => {
  const[Username,setUserName]= useState()
  const[email,setEmail]= useState()
  const[password,setPassword]=useState()
  const navigate =useNavigate()
    const handleSumit=(e) => {
      e.preventDefault()
      axios.post('http://localhost:3001/Pages/Registration/Signup',{Username,email,password})
      .then(result => {console.log(result)
      navigate('/src/Pages/Login')
      })
      .catch(err => console.log(err))
    }

  return (
    <div className='container-sign'>
      <div className='wrapper'>
        <div className="form-box register">
          <form onSubmit={handleSumit}>
            <h1>Registration</h1>
            <div className="input-box">
              <input type="text" placeholder='Username' required  onChange={(e)=>setUserName(e.target.value)}/>
              <FaUser className='icon' />
            </div>
            <div className="input-box">
              <input type="email" placeholder='Email' required onChange={(e)=>setEmail(e.target.value)}/>
              <FaEnvelope className='icon' />
            </div>
            <div className="input-box">
              <input type="password" placeholder='Password' required onChange={(e)=>setPassword(e.target.value)}/>
              <FaLock className='icon' />
            </div>
            <div className="remember-forgot">
              <label><input type="checkbox" />I agree to the terms & conditions</label>

            </div>
            <button type="submit" >Register</button>

            <div className="register-link">
              <p>Already have an account? <Link to='/src/Pages/Login'>Login</Link></p>
            </div>
              <div className='back-icon'>
                <Link to="/"><IoArrowBackCircleOutline /></Link>
              </div>
          </form>
        </div>

      </div>
    </div>
  );
}

export default Signup
