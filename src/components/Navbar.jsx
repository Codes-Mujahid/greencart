import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {assets} from '../assets/assets.js'
const Navbar = () => {
    const[menu, setMenu]= useState(false)
  return (
    <div className='flex flex-col gap-4 sm:flex-row justify-between items-center px-8 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] py-4 border-b border-b-gray-300 '>
        <NavLink to='/' className='w-32 sm:w-32 lg:w-40 shrink-0' ><img src={assets.logo} alt="" /></NavLink>
        <div className='flex justify-between items-center gap-8'>
            <div className='hidden md:flex font-medium text-sm sm:text-base gap-4'>
                <NavLink>Home</NavLink>
                <NavLink>Products</NavLink>
                <NavLink>Contact</NavLink>
            </div>
            <div className='flex text-sm border border-primary rounded-full px-4 py-2 items-center gap-2'>
                <input className='outline-none w-full' type="text" placeholder='Search products' />
                <img className='h-4.5 w-4.5' src={assets.search_icon} alt="" />
            </div>
            <div className='flex relative shrink-0'>
                <img className='w-5 sm:w-5 md:w-6 lg:w-7 opacity-80' src={assets.cart_icon} alt="" />
                <button className='absolute -top-2 -right-3 h-4.5 w-4.5 bg-primary rounded-full text-white text-xs' type="button">0</button>
            </div>
            <button className='hidden md:block px-10 py-2 rounded-full bg-primary text-white font-medium' type="button">Login</button>
            <img onClick={()=>setMenu(!menu)} className='md:hidden' src={assets.menu_icon} alt="" />
        </div>




        {/* toogle menu options */}

        <div className={`absolute overflow-hidden top-0 right-0 bottom-0 transition-all bg-gray-200 ${menu? 'w-full': 'w-0'}`}>
            <div onClick={()=> setMenu(false)} className="flex items-center gap-2 px-5 py-3">
                <i class="fa-solid fa-arrow-left"></i>
                <p className="font-bold text-gray-600">Back</p>
            </div>
            <div className="flex flex-col text-sm">
                <NavLink onClick={()=>setMenu(false)} to='/' className=' pl-5 py-3'>HOME</NavLink>
                <NavLink onClick={()=>setMenu(false)} to='/collection'className=' pl-5 py-3' >PRODUCTS</NavLink>
                <NavLink onClick={()=>setMenu(false)} to='/contact' className=' pl-5 py-3'>CONTACT</NavLink>
            </div>
        </div>

    </div>
  )
}

export default Navbar