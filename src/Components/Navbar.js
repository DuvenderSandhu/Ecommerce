import React from 'react'
import { useDispatch, useSelector} from 'react-redux';
import {Link, useNavigate} from "react-router-dom";
import Alert from './Alert';
import actionCreators from './state/index'

export default function Navbar() {
  const dispatch=useDispatch();
  const navigate=useNavigate()
  const getObj=function(){
  const result=fetch('http://localhost/shop').then(res=>res.json()).then(data=>dispatch(actionCreators.changeObj(data.shop)))
  console.log(result)
  }
  getObj()
  const Status={
    status:false,
    heading:"",
    para:""
  }
  const activeStatus={
    status:true,
    heading:"Success",
    para:"Successfully Logged Out"
  }
function logout(){
  
  dispatch(actionCreators.userToken({}))
  dispatch(actionCreators.alertStatus(activeStatus))
  navigate('/login')
}
  const alerts=useSelector(state=>state.alerts)
  const token=useSelector(state=>state.token)
  console.log(alerts)
if(alerts.status){
setTimeout(() => {
  dispatch(actionCreators.alertStatus(Status))
  
}, 3000);
}
if(token){
  const req={
    token:token.token
  }
  async function getData(){
    const data=await fetch('http://localhost/cart',{
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(req),
  })
  const result=await data.json()
  console.log(result)
  if(result.error){
    const Status={
      status:true,
      heading:"Error",
      para:result.error
    }
dispatch(actionCreators.alertStatus(Status))

  }
  else if(result.length!==0){
dispatch(actionCreators.updateCart(result))
  }
  

  
}
getData()
}

  return (
    <>
    <div className="Navbar sticky top-0 bg-gray-900 flex justify-between items-center py-2 px-16 ">
      <h1 className="text-2xl text-white cursor-pointer font-bold"><Link to='/'>Ecommerce</Link></h1>
      <ul className="list-none flex text-white w-[100%] justify-center">
            <li className='nav-item mx-2 px-2 text-lg hover:text-blue-500 font-bold cursor-pointer '><Link to='/'>Home</Link></li>
            <li className='nav-item mx-2 px-2 text-lg hover:text-blue-500 font-bold cursor-pointer '><Link to="/shop">Shop</Link></li>

{token.token?<><li className='nav-item mx-2 px-2 text-lg hover:text-blue-500 font-bold cursor-pointer '><Link to="/cart">Cart</Link></li><li className='nav-item mx-2 px-2 text-lg hover:text-blue-500 font-bold cursor-pointer '><Link onClick={logout} to="/login">Logout</Link></li></>:<><li className='nav-item mx-2 px-2 text-lg hover:text-blue-500 font-bold cursor-pointer '><Link to="/signup">Signup</Link></li><li className='nav-item mx-2 px-2 text-lg hover:text-blue-500 font-bold cursor-pointer '><Link to="/login">Login</Link></li></>}
        </ul>
        {/* <div className="side flex text-white justify-end py-1">
        <input type="text" className="rounded-sm mx-2 px-2 py-1 " placeholder="Search Here"/>
        <button className="bg-blue-500 p-2 rounded-sm hover:bg-blue-700 font-bold" onClick={()=>dispatch(actionCreators.itemChange("New Item"))}>Search</button>
      </div> */}
     
    </div>
    {alerts.status?<Alert/>:""}


    </>
  )
}
