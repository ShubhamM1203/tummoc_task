import React, { useState } from 'react'
import "./signup.css"
import axios from "axios"
import { useNavigate } from 'react-router'
export const SignUp = () => {
  
  const navigate = useNavigate()
  const [name,setName]= useState("")
  const [email,setEmail]= useState("")
  const [password,setPassword]= useState("")
   

  const handelSubmit = async(e)=>{
    e.preventDefault();
    
    axios.post("http://localhost:8080/api/signup",{
      name,email,password
    }).then(function (response) {
      if(response.data.status=="ok"){
        console.log(response)
           navigate("/login")
      };
    })
    .catch(function (error) {
      console.log(error);
    });
   
    
  }
  return (
    <div className='logindiv'>
        <h2 className='onlyh2'>Please SignUp</h2>
        <form onSubmit={handelSubmit}>
            <label className='ldiv'>Enter Your Name :</label><br />
            <input  value={name} onChange={(e)=>{
              setName(e.target.value)
            }} className='idiv' type="text"  placeholder='Enter Your Name'/><br />

            <label className='ldiv'>Enter Your Email :</label><br />
            <input value={email} onChange={(e)=>{
              setEmail(e.target.value)
            }} className='idiv' type="email"  placeholder='Enter Your Email'/><br />

            <label className='ldiv'>Enter Your Password :</label><br />
            <input value={password} onChange={(e)=>{
              setPassword(e.target.value)
            }} className='idiv' type="password"  placeholder='Enter Your Password'/><br />

            <input className='lbut' type="submit" value="SignUp"/>
        </form>
    </div>
  )
}
