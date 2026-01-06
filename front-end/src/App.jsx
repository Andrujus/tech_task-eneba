import { useState } from 'react'
import './App.css'
import GameCard from './components/game-card'
import Navbar from './components/Navbar'
import { useEffect } from 'react'
import Home from './pages/home'
import Account from './pages/account'
import Favorites from './pages/favorite'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() {
  return(
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/account' element={<Account/>}/>
          <Route path='/favorites' element={<Favorites/>}/>
        </Routes>
      </Router>
    </>
  );
};

export default App

/* colors:
lighter purple #5116d0
purple #4518ad
dark purple #20094d

*/