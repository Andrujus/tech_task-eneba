import { Heart } from "lucide-react";
import "../css/game-card.css"
import { useState } from "react"

function GameCard(props){
    const [isFav, setIsFav] = useState(false);

    

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
                <button className="favorite" 
                onClick={() => {}}>
                    {isFav ? <Heart fill="white"/> : <Heart/>}
                </button>
            </div>
        </div>
    </div>
    )
}

export default GameCard