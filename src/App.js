import React from 'react';
import './App.css';
import Navigation from './Components/Navigation';

import Home from './Pages/Home';
import About from './Pages/About';
import Resume from './Pages/Resume';
import Skills from './Pages/Skills';
import Services from './Pages/Services';
import Project from './Pages/Project';
import HireMe from './Pages/HireMe';
import Contact from './Pages/Contact';
import Footer from './Pages/Footer';
function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Navigation />
        <Home />
        <About />
        <Resume />
        <Skills />
        <Services />
        <Project />
        <HireMe />
        <Contact />
        <Footer />
      </React.Fragment>    </div>
  );
}

export default App;
