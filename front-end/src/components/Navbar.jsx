import { useState } from "react";
import "../css/navbar.css"




function Navbar() {
    
    const HandleSearch = () => {};

    const [searchQuery, setSearchQuery] = useState("");

    return(
        <nav className="navigation-bar">
            <div className="logo-cont">
                <img className="logo" src="/eneba1.png"/>
                <div className="logo-text">eneba</div>
            </div>
            
            <form onSubmit={HandleSearch} className="search-cont">
                <button type="submit" className="search-btn">⌕</button>
                <input className="input-bar" 
                placeholder="search" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                />
            </form>
            <div className="nav-right">
                <button className="language-btn"></button>
                <div className="language">LT</div>
                <div className="favorites">♡</div>
                <div className="cart">🛒</div>
                <div className="account">👤</div>
            </div>
        </nav>
    )
}

export default Navbar