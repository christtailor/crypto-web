import React from 'react'
import './navbar.css'
import { BrowserRouter as Router, Switch, Route , Routes, Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <>
        <div className="navbar">
            <div className="logo">
                <h1><span>Crypto</span>-App</h1>
                {/* <img src="" /> */}
            </div>
            
            <div className="nav-links">
              <Link to="/" className="links">Home</Link>
              <Link to="/allcoins" className="links">All Coins</Link>
              <Link to="/news" className="links">News</Link>
            </div>
        </div>

    </>
  )
}

export default Navbar