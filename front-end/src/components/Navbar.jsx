import { useState } from "react";
import "../css/navbar.css"
import { Heart, ShoppingCart } from "lucide-react"
import { Route, Routes, Router, Link } from 'react-router-dom'

function Navbar({ onSearchResults }) {
    const [input, setInput] = useState("");

    const fetchData = async (value) =>{
        if (!value) {
            if (onSearchResults) onSearchResults(null);
            return;
        }
        const res = await fetch(`http://localhost:5000/api/list/search/${encodeURIComponent(value)}`);
        const data = await res.json();
        console.log(data);
        
        if (onSearchResults) onSearchResults(data);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchData(input);
    }
    
    const handleLogoClick = () => {
        setInput("");
        if (onSearchResults) onSearchResults(null);
    }

    return(
        <nav className="navigation-bar">
            <Link to='/'>
            <button className="logo-btn" onClick={handleLogoClick}>
                <div className="logo-cont">
                    <img className="logo" src="/eneba1.png"/>
                    <div className="logo-text">eneba</div>
                </div>
            </button>
            </Link>
            
            <form className="search-cont" onSubmit={handleSubmit}>
                <button type="submit" className="search-btn">⌕</button>
                <input className="input-bar" 
                placeholder="search" 
                value = {input}
                onChange={(e) => setInput(e.target.value)}
                
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