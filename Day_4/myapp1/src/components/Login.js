import React, { useState } from 'react'
import '../Assets/css/login.css'
import { Link } from 'react-router-dom'
import c1 from '../Assets/c1.png'
// import newlogin from '../assets/newlogin.png'
import { emailValidator, passwordValidator } from './Loginvalidator'
import {  useNavigate } from 'react-router-dom'
export default function Login() {

  const[input,setInput]=React.useState({email:'',password:''})

  const handleChange =(e)=>{
    setInput({...input,[e.target.name]:e.target.value})
    seterrorMessage(''); 
  }

  const [errorMessage,seterrorMessage]=useState('')
  
  const navigate = useNavigate();

  const formSubmitter =(e)=>{
    e.preventDefault();

    if(!emailValidator(input.email))
    return seterrorMessage("Please enter valid email id")

    if(!passwordValidator(input.password))
    return seterrorMessage("create valid password")

    navigate('/');

  }

  return (
    <div className='HomeContainer'>

    <img src={c1} alt='Login' className='imageLogin'></img>


      
      <form  className='sub-container' onSubmit={formSubmitter}>
            <div className='headers'>Welcome Back!</div>

            <div className='inputs'>

                {errorMessage.length>0 && (
                <div style={{marginBottom:'3px',color:'red'}}>{errorMessage}</div>)}

                      <div className='input'>
                <input type='text' placeholder='Email' name='email' onChange={handleChange}></input>
                </div>

                <div className='input'>
                <input type='password' placeholder='Password' name='password' onChange={handleChange}></input>
                </div>

            </div>

            <div className='account'><Link to='/' id='id1'>Login as Guest</Link>
            <Link to='/signup' className='linkabs'><span>Signup</span></Link></div>

            <div className='submit-container'>
                  <button type='submit'>Login</button>
            </div>

      </form>

    </div>
  )
}