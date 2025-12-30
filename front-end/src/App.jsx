import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GameCard from './components/game-card'
import Navbar from './components/Navbar'
import { useEffect } from 'react'

function App() {

  const [games, setGames] = useState([]);

  useEffect(() => {
    const getGames = async () => {
      try {
        const res = await fetch("http://localhost:5000/list");
        const data = await res.json();
        console.log(data);
        setGames(data);
      } catch (err) {
        console.error(err);
      }
    };

    getGames();
  }, []);
  return (
    <>
    <Navbar/>
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

export default App

/* colors:
lighter purple #5116d0
purple #4518ad
dark purple #20094d

*/