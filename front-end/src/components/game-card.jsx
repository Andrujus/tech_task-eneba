import "../css/game-card.css"

function GameCard(props){
    return (
        <div className="Game-Card">
            <div className="images"></div>
            <div className="card-cont">
                <div className="title">{props.Title}</div>
                <div className="region">{props.Region}</div>
                <div className="discount">from {props.Discount}</div>
                <div className="price">{props.Price}</div>
                <div className="favorite">♡</div>
            </div>
            
        </div>
    )
}

export default GameCard