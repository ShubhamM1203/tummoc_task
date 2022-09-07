
import React, { useState } from 'react'
import "./login.css"
import axios from 'axios'
import { useNavigate } from 'react-router'


export const Login = () => {

 const navigate = useNavigate()
  const [email,setEmail]= useState("")
  const [password,setPassword]= useState("")
   

  const handelSubmit = async(e)=>{
    e.preventDefault();
    
    axios.post("http://localhost:8080/api/login",{
      email,password
    }).then(function (response) {
      if(response.data.user){
        alert("Login Successful")
        navigate("/")

      }
      else{
        alert("please check your Email or Password")
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  return (
    <div className='logindiv'>
        <h2 className='onlyh2'>Please Login</h2>
        <form onSubmit={handelSubmit}>
            <label className='ldiv'>Enter Your Email :</label><br />
            <input value={email} onChange={(e)=>{
               setEmail(e.target.value)
            }} className='idiv' type="email"  placeholder='Enter Your Email'/><br />

            <label className='ldiv'>Enter Your Password :</label><br />
            <input value={password} onChange={(e)=>{
               setPassword(e.target.value)
            }} className='idiv' type="password"  placeholder='Enter Your Password'/><br />

            <input className='lbut' type="submit" value="Login"/>
        </form>
    </div>
  )
}
