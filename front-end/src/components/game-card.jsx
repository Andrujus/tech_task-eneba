import "../css/game-card.css"

function GameCard(props){
    return (
    <button className="game-card-btn">
        <div className="Game-Card">
            <div className="images">
                <img className="card-img" src={props.Image}/>
            </div>
            <div className="card-cont">
                <div className="title">{props.Title}</div>
                <div className="region">{props.Region}</div>
                <div className="discount">from {props.Discount}</div>
                <div className="price">{props.Price}</div>
                <button className="favorite">♡</button>
            </div>
        </div>
    </button>
    )
}

export default GameCard