import React from 'react'
import men from '../images/men.jpg'
import women from '../images/women.jpg'
import children from '../images/children.jpg'

import { useSelector } from 'react-redux'

export default function Category() {
  const obj= useSelector(state=>state.obj)
  console.log(obj)


  return (
    <>
    <h1 className=" heading text-center font-bold text-3xl underline">Category</h1>
    <p className="text-xl text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, a?</p>
    <div className="boxes m-4 flex flex-wrap justify-around px-2">
       <div  className="box m-2 text-white rounded-xl p-2 flex flex-col justify-center items-center w-[250px]  cursor-pointer ">
        <div className="img h-[200px] w-[250px] pt-1 "><img src={men} className="overflow-hidden m-auto h-[200px] w-[350px]   hover:blur-sm rounded-md " alt="Men"/></div>
        <div className="bottom h-[50px] w-[250px] bg-gray-900"><h1 className="font-bold text-xl text-center mt-2">Men Wear</h1></div>
    </div>
        <div  className="box m-2 text-white rounded-xl p-2 flex flex-col justify-center items-center w-[250px]  cursor-pointer ">
        <div className="img h-[200px] w-[250px] pt-1"><img src={women} className="overflow-hidden m-auto h-[200px] w-[350px]  hover:blur-sm rounded-md" alt="Women"/></div>
        <div className="bottom h-[50px] w-[250px] bg-gray-900"><h1 className="font-bold text-xl text-center mt-2">Women Wear</h1></div>
    </div>
        <div  className="box m-2 text-white rounded-xl p-2 flex flex-col justify-center items-center w-[250px]  cursor-pointer ">
        <div className="img h-[200px] w-[250px] pt-1"><img src={children} className="overflow-hidden m-auto h-[200px] w-[350px]   hover:blur-sm rounded-md"  alt="Children"/></div>
        <div className="bottom h-[50px] w-[250px] bg-gray-900"><h1 className="font-bold text-xl text-center mt-2">All</h1></div>
    </div>
        </div>

    </>
  )
}
