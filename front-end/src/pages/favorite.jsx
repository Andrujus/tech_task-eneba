import Navbar from '../components/Navbar'
import "../css/favorites.css"
import GameCard from '../components/game-card';
import { useState, useEffect } from 'react';

function Favorites(props) {

  const [favorites, setFavorites] = useState([]);
  const [allFavs, setAllFavs] = useState([]);

  useEffect(() => {
      const GetFavorites = async () => {
        try {
          const res = await fetch("http://localhost:5000/api/list/favorites");
          const data = await res.json();
          console.log(data);
          setFavorites(data);
          setAllFavs(data);
        } catch (err) {
          console.error(err);
        }
      };
      GetFavorites();
}, []);

  return (
    <>
    <Navbar/>
    <h3>Favorites</h3>
    <div className='favorite-cont'>
    {favorites.map((data) => (
      <GameCard
      key={data.gameid}
        Image={`http://localhost:5000/images/${data.ImageUrl}`}
        Title={data.gametitle}
        Region={data.gameregion}
        Price={`€${data.gameprice}`}
        Favorite={data.isfavorite}
      />
    ))};
    </div>
    </>
  );
}

export default Favorites;