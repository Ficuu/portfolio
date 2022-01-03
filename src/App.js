import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

// Components
import Nav from './Components/Nav'
import Footer from './Components/Footer'

// Views
import Contact from './Views/Contact'
import Home from './Views/Home'

const App = () => {
  return(
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
