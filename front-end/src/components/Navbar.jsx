import "../css/navbar.css"

function Navbar() {
    return(
        <nav className="navigation-bar">
            <img src="../assets/react.svg"/>
            <input className="input-bar" placeholder="search"></input>
            <div className="language">Lietuva</div>
            <div className="favorites">♡</div>
            <div className="cart">🛒</div>
            <div className="account">acc</div>
        </nav>
    )
}

export default Navbar