import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

// Components
import Nav from './Components/Nav'
import Footer from './Components/Footer'

// Views
import Contact from './Views/Contact'
import Home from './Views/Home'
import Works from './Views/Works'

const App = () => {
  return(
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path='/portfolio' exact element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/works' element={<Works />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
