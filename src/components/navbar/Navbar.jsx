import React, {useState} from 'react'
import './navbar.css';
import {  RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import { BrowserRouter as Router, Switch, Route , Routes, Link} from 'react-router-dom';



const Menu = () => (
  <>
          <p><Link to="/" className="links" >Home</Link></p>
          <p><Link to="/allcoins" className="links" >AllCoins</Link></p>
          <p><Link to="/calculator" className="links">Calculator</Link></p>
  </>
)
const Navbar = () => {
  const reboot13 = "</reboot13>"
  const transition = () => {
    "transition: all 3s ease;"
  }
  const [toggleMenu , setToggleMenu] = useState(false)
  return (
    <>
      <div className='navbar'>
      <div className='navbar-links'>

        <div className='navbar-links_logo'>
        <h1 className='primary-color'><Link to="/" className="links">CryptoSimplified</Link></h1>
        </div>

        <div className="navbar-links_container">
          <Menu onClick={() => setToggleMenu(false)}  />
        </div>
        <div className="togglemenu">
        {toggleMenu
            ? <RiCloseLine color="#000" className={"none"}  size={27} onClick={() => setToggleMenu(false)} />
            : <RiMenu3Line color="#000" className={"none"} size={27}  onClick={() => setToggleMenu(true)} />
            }
        </div>
      </div>
        </div>


        <div className="navbar-menu">
     
            {toggleMenu && (
              <div className='navbar-menu-container' >
                <div className='navbar-menu-container_links'>
                <Menu onClick={() => setToggleMenu(false)}  />
                </div>
              </div>
            )}
        </div>
    </>
  
  )
}

export default Navbar