import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import Home from './Home'
import actionCreators from './state';
export default function Signup() {
    document.title="Signup - Ecommerce Website"
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    const [email, setemail] = useState("")
const dispatch=useDispatch()
const req={
  username:username,
  password:password,
  email:email
};
const navigate=useNavigate()
async function getData(){
  const data=await fetch('http://localhost/signup',{
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(req),
})
const result=await data.json()
if(result.error){
  const Status={
    status:true,
    heading:"Error",
    para:result.error
  }
  dispatch(actionCreators.alertStatus(Status))
}
else{
  navigate('/login')
  const Status={
    status:true,
    heading:"Success",
    para:"User Created Kindly Login"
  }
  dispatch(actionCreators.alertStatus(Status))
}
}


 
  return (
    <>
<div className="text-2xl font-bold text-center">Signup Page</div>
<div className="w-full ">
  <div className="bg-white shadow-md rounded px-8 pt-6 min-h-[80vh] pb-8 mb-4" >
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
        Username
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" onChange={(e)=>setusername(e.target.value)} name="username" placeholder="Username"/>
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
        Email
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" onChange={(e)=>setemail(e.target.value)} name="email" placeholder="Email"/>
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
        Password
      </label>
      <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" onChange={(e)=>setpassword(e.target.value)} name="password" placeholder="******************"/>
      <p className="text-red-500 text-xs italic">Please choose a password.</p>
    </div>
    <div className="flex items-center justify-between">
      <button onClick={getData} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" >
      Create Account
        </button>
    </div>
  </div>
  <p className="text-center text-gray-500 text-xs">
    &copy;2020 Acme Corp. All rights reserved.
  </p>
</div>
</> 
  )
}
