import { Heart } from "lucide-react";
import "../css/game-card.css"
import { useState, useEffect } from "react"

function GameCard(props){
    const [favorite, setFavorite] = useState(!!props.Favorite);

    const handleClick = async () => {
        const next = !favorite;
        try {
            const response = await fetch(`https://tech-task-eneba.onrender.com/api/list/${props.id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ IsFavorite: next })
            });
            if (response.ok) {
                setFavorite(next);
            } else {
                const text = await response.text();
                console.error(`API Error: ${response.status} - ${text}`);
            }
        } catch (err) {
            console.error(err);
            setFavorite(favorite);
        }
    };

    useEffect(() => {
        setFavorite(!!props.Favorite);
    }, [props.Favorite]);

    return (
    <div className="game-card-btn">
        <div className="Game-Card">
            <div className="images">
                <img className="card-img" src={props.Image}/>
            </div>
            <div className="card-cont">
                <div className="title">{props.Title}</div>
                <div className="region">{props.Region}</div>
                <div className="discount">from {props.Discount}</div>
                <div className="price">{props.Price}</div>
                <button className="favorite" onClick={handleClick}>{props.Favorite}
                    {favorite ? <Heart fill="white"/> : <Heart/>}
                </button>
            </div>
        </div>
    </div>
    )
};

export default GameCard