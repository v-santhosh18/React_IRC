import { useState } from "react";
import { adduser } from "../services/api";
import {useNavigate} from 'react-router-dom';

const Adduser =()=> {
  const navigate = useNavigate()

  const[data,setData]=useState({
    username:'',
    password:''
  })

  const handleChange =(e)=>
  {
setData({...data,[e.target.id]:e.target.value})
  }
  const handleSubmit = async(e)=>
  {
    e.preventDefault();
    try{

      const res = await adduser(data)
      if(res.status === 201)
      {
        alert('user added')
        navigate('/')
      }
    }
    catch(e)
    {
      console.log(e)
    }

    console.log(data)
  }

    return (
    <>
    <form onSubmit={handleSubmit}>
      <input type="text" id='username' placeholder="username" onChange={handleChange}/>
      <input type="text" id='password' placeholder="password"onChange={handleChange}/>
      <button type="submit" className="submit-btn">Add</button>
    </form>
    </>
    );
  }
  
  export default Adduser;
  