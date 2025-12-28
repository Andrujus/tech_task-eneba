import "../css/navbar.css"

function Navbar() {
    return(
        <nav className="navigation-bar">
            <div className="logo-cont">
                <img className="logo" src="/eneba1.png"/>
                <div className="logo-text">eneba</div>
            </div>
            
            <div className="search-cont">
                <button className="search-btn">⌕</button>
                <input className="input-bar" placeholder="search"/>
            </div>
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