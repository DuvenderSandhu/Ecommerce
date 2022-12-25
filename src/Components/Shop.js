import React from 'react'
import banner from '../images/Banner.jpg'
import Category from './Category'
import ShopItems from './ShopItems'
export default function Shop() {
  return (
    <>
<div className="img " alt="Banner Here">
    <img className='h-[80vh] w-full' src={banner} alt='Banner Here'/>
</div>
<Category/>
<ShopItems/>
    </>
  )
}
