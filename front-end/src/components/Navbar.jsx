import { useState } from "react";
import "../css/navbar.css"
import { Heart, ShoppingCart } from "lucide-react"
import { Route, Routes, Router, Link } from 'react-router-dom'




function Navbar() {
    
    return(
        <nav className="navigation-bar">
            <Link to='/'>
            <button className="logo-btn">
                <div className="logo-cont">
                    <img className="logo" src="/eneba1.png"/>
                    <div className="logo-text">eneba</div>
                </div>
            </button>
            </Link>
            
            <form className="search-cont">
                <button type="submit" className="search-btn">⌕</button>
                <input className="input-bar" 
                placeholder="search" 
                />
            </form>
            <div className="nav-right">
                <button className="language-btn"></button>
                <div className="language">LT</div>
                <button className="favorites-btn">
                    <Heart/>
                </button>
                <button className="cart">
                    <ShoppingCart/>
                </button>
                <Link to="/account">
                    <button className="account"></button>
                </Link>
                
                
            </div>
        </nav>
    )
}

export default Navbar