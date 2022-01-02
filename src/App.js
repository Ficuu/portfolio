import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';

import Nav from './Components/Nav';
import Presentation from './Components/Presentation';
import Section from './Components/Section';

const App = () => {
  return(
    <>
      <Router>
        <Nav />
        <Section />
        <Presentation />
        <Footer />
      </Router>
    </>
  )
}

export default App;
