import React from 'react'

export default function Why() {
  return (
    <>
    <h1 className=" heading text-center font-bold text-3xl underline">Ecommerce Website</h1>
    <p className="text-xl text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, a?</p>
    <div className="why w-5/6 m-auto flex flex-col min-h-[50vh] justify-center rounded-full">
      <div className="boxes  flex flex-wrap justify-between">
        <div className="box m-2 text-white rounded-xl p-2 flex flex-col justify-center items-center w-[250px] h-[250px] cursor-pointer bg-gray-900 hover:bg-gray-800">
          <img src="https://img.icons8.com/fluency/48/000000/trust.png" alt="Trusted Brands"/>
          <h1 className="font-bold text-2xl mt-2">Trusted Brands</h1>
          <p className="text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, nemo.</p>
        </div>

        <div className="box m-2 text-white rounded-xl p-2 flex flex-col justify-center items-center w-[250px] h-[250px] cursor-pointer bg-gray-900 hover:bg-gray-800">
          <img src="https://img.icons8.com/color/48/000000/deliver-food.png" alt="1 Day Delivery"/>
          <h1 className="font-bold text-2xl mt-2">1 Day Delivery</h1>
          <p className="text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, nemo.</p>
        </div>

        <div className="box m-2 text-white rounded-xl p-2 flex flex-col justify-center items-center w-[250px] h-[250px] cursor-pointer bg-gray-900 hover:bg-gray-800">
          <img src="https://img.icons8.com/fluency/48/000000/smiling-face-with-heart.png" alt="Custmor Satisfation"/>
          <h1 className="font-bold text-2xl mt-2">Custmor Satisfation</h1>
          <p className="text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, nemo.</p>
        </div>

        <div className="box m-2 text-white rounded-xl p-2 flex flex-col justify-center items-center w-[250px] h-[250px] cursor-pointer bg-gray-900 hover:bg-gray-800">
          <img src="https://img.icons8.com/ios-filled/50/FD7E14/give-gift.png" alt="10 Days Return"/>
          <h1 className="font-bold text-2xl mt-2">10 Days Return </h1>
          <p className="text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, nemo.</p>
        </div>
        
        

      </div>
    </div>
    </>
  )
}
