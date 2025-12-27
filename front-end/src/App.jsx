import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GameCard from './components/game-card'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
    <Navbar/>
      <div className='centered-view'>
        
        <GameCard/>
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