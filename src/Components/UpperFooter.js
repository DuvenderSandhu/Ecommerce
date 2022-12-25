import React from 'react'
import {Link} from "react-router-dom";

export default function upperFooter() {
  return (
    <div className="upperFooter min-h-[50vh] flex flex-col justify-center items-center">
        <p className="my-1">See personalized recommendations</p>
        <Link to="/login" className="bg-blue-500 text-white p-2 my-1 px-8 rounded-sm mt-2 hover:bg-blue-700">Log in</Link>
        <p className="">New customer? <Link to="/signup" className="text-blue-500 ">Sign Up.</Link></p>
    </div>
  )
}
