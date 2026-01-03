import { useState } from 'react'
import '../css/home.css'
import GameCard from '../components/game-card'
import Navbar from '../components/Navbar'
import { useEffect } from 'react'

function Home() {
  const [games, setGames] = useState([]);
  const [allGames, setAllGames] = useState([]);

  useEffect(() => {
    const getGames = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/list");
        const data = await res.json();
        console.log(data);
        setGames(data);
        setAllGames(data);
      } catch (err) {
        console.error(err);
      }
    };

    getGames();
  }, []);

  const handleSearchResults = (searchResults) => {
    if (searchResults === null) {
      setGames(allGames);
    } else {
      setGames([...searchResults]);
    }
  };

  return (
    <>
    <Navbar onSearchResults={handleSearchResults}/>
      <div className='results-found'> 
          Results found: {games.length}
        </div>
      <div className='centered-view'>
        
        <>
        {games.map((data) => (
          <GameCard key={data.gameid}
          Image={`http://localhost:5000/images/${data.ImageUrl}`}
          Title={data.gametitle} 
          Region={data.gameregion} 
          Price={`€${data.gameprice}`}/>
        ))}
        </>
      </div>
      
    </>
  )
}

export default Home