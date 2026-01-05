import { useState } from 'react'
import '../css/home.css'
import GameCard from '../components/game-card'
import Navbar from '../components/Navbar'
import { useEffect } from 'react'

function Home() {
  const [games, setGames] = useState([]);
  const [allGames, setAllGames] = useState([]);
  const [visibleCount, setVisibleCount] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

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
    setCurrentPage(1);
  };

  const handleViewChange = (e) => {
    setVisibleCount(Number(e.target.value));
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(games.length / visibleCount);
  const startIndex = (currentPage - 1) * visibleCount;
  const endIndex = startIndex + visibleCount;

  return (
    <>
    <Navbar onSearchResults={handleSearchResults}/>
    <select
      className="view-games"
      value={visibleCount}
      onChange={(e) => setVisibleCount(Number(e.target.value))}
    >
    <option value={4}>4</option>
    <option value={6}>6</option>
    <option value={8}>8</option>
    <option value={10}>10</option>
    </select>
      <div className='results-found'> 
          Results found: {games.length}
        </div>
      <div className='centered-view'>
        
        <>
        {games.slice(startIndex, endIndex).map((data) => (
          <GameCard
          key={data.gameid}
          Image={`http://localhost:5000/images/${data.ImageUrl}`}
          Title={data.gametitle}
          Region={data.gameregion}
          Price={`€${data.gameprice}`}
          />
          ))}
        </>
      </div>
      {games.length > visibleCount && (
        <div className='pages-view'>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className='pages-btn'
            >
              {page}
            </button>
          ))}
        </div>
      )}
    </>
  )
}

export default Home