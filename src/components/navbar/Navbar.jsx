import React, { useState } from 'react'
import Button from './Button.js';
import './navbar.css'
import { BrowserRouter as Router, Switch, Route , Routes, Link} from 'react-router-dom';
const Menu = () => (
  <>
          <p><Link to="/" className="links" >Home</Link></p>
          <p><Link to="/allcoins" className="links" >AllCoins</Link></p>
          <p><Link to="/calculator" className="links">Calculator</Link></p>
  </>
)
const Navbar = () => {
  let Links =[
    <Link to="/" className="links" >Home</Link>,
    <Link to="/allcoins" className="links" >AllCoins</Link>,
    <Link to="/calculator" className="links">Calculator</Link>,
  ];
    let [open,setOpen]=useState(false);
  return (
    <div className='navbar w-full fixed top-0 left-0 z-50'>
      <div className=' md:flex items-center justify-between bg-transparent py-4 md:px-10 px-7 max-w-screen-2xl m-auto'>
      <a href="/" className='text-white'><div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins]'>
        <span className='text-3xl text-indigo-600 mr-1 pt-2'>
        <ion-icon name="logo-xing"></ion-icon>
        </span>
        CryptoFlow
      </div></a>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden text-white'>
      <ion-icon name={open ? 'close':'menu'}></ion-icon>
      </div>

      <ul className={`text-white links md:flex md:items-center md:pb-0 pb-12 absolute md:static  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-300 ease-in ${open ? 'top-20 bg-white text-black':'top-[-490px]'}`}>
        
         
            <li className={`md:ml-8 text-xl md:my-0 my-7 flex  gap-4 ${open ? 'flex-col':'flex-row'}`}>
            {/* <a className={`text-gray-800 hover:text-gray-400 duration-500 gap-4  ${open ? 'flex-col':'flex gap-4 '}`}> <Menu /></a> */}
            <Menu className={`links text-gray-800 hover:text-gray-400 duration-300 gap-4 flex flex-row`} />
            </li>
      
        <Button>
          Get Started
        </Button>
      </ul>
      </div>
    </div>
  )
}

export default Navbar
