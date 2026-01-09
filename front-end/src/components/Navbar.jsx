import { useEffect, useRef, useState } from "react";
import "../css/navbar.css";
import { Heart, ShoppingCart, User } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar({ onSearchResults }) {
    const [input, setInput] = useState("");
    const isDesktop = () => (typeof window !== "undefined" ? !window.matchMedia("(max-width: 640px)").matches : true);
    const [isSearchOpen, setIsSearchOpen] = useState(isDesktop);
    const inputRef = useRef(null);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 640px)");
        const updateSearchState = () => setIsSearchOpen(!mediaQuery.matches);

        updateSearchState();
        mediaQuery.addEventListener("change", updateSearchState);
        return () => mediaQuery.removeEventListener("change", updateSearchState);
    }, []);

    const fetchData = async (value) =>{
        if (!value) {
            if (onSearchResults) onSearchResults(null);
            return;
        }
        const res = await fetch(`https://tech-task-eneba.onrender.com/api/list/search/${encodeURIComponent(value)}`);
        const data = await res.json();
        console.log(data);
        
        if (onSearchResults) onSearchResults(data);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchData(input);
    };

    const handleSearchButtonClick = (e) => {
        const isMobile = window.matchMedia("(max-width: 640px)").matches;
        if (isMobile && !isSearchOpen) {
            e.preventDefault();
            setIsSearchOpen(true);
            requestAnimationFrame(() => inputRef.current?.focus());
            return;
        }
        fetchData(input);
    };
    
    const handleLogoClick = () => {
        setInput("");
        setIsSearchOpen(isDesktop());
        if (onSearchResults) onSearchResults(null);
    };

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
            
            <form className={`search-cont ${isSearchOpen ? "open" : ""}`} onSubmit={handleSubmit}>
                <button type="button" className="search-btn" onClick={handleSearchButtonClick}>⌕</button>
                <input
                    ref={inputRef}
                    className="input-bar"
                    placeholder="search"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
            </form>
            <div className="nav-right">
                <button className="language-btn"></button>
                <div className="language">LT</div>
                <Link to='/favorites'>
                    <button className="favorites-btn">
                        <Heart/>
                    </button>
                </Link>
                <button className="cart">
                    <ShoppingCart/>
                </button>
                <Link to="/account">
                    <button className="account">
                        <User/>
                    </button>
                </Link>
                
                
            </div>
        </nav>
    )
}

export default Navbar