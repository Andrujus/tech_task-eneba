import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GameCard from './components/game-card'
import Navbar from './components/Navbar'
import fifa23 from "./assets/fifa-23.png"
import rdr2 from "./assets/rdr-2.png"
import splitfiction from "./assets/split-fiction.png"

function App() {
  return (
    <>
    <Navbar/>
      <div className='centered-view'>
        <GameCard Image={fifa23} Title="Fifa 23 PS4" Region="GLOBAL" Discount="€49.99" Price="€41.99"/>
        <GameCard Image={rdr2} Title=" Red Dead Redemption 2" Region = "EUROPE" Discount="€39.99" Price="€23.99"/>
        <GameCard Image={splitfiction} Title=" Split Fiction Steam Key" Region = "EUROPE" Discount="€39.99" Price="€23.99"/>
        <GameCard Image={rdr2} Title=" Red Dead Redemption 2" Region = "GLOBAL" Discount="€39.99" Price="€23.99"/>
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