//import logo from './logo.svg';

import React, { useState } from 'react';
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Project from "./components/Project";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";

import './App.css';

// function App() {
//   return (
//     <div className="App">

//       <div>
//         <Header/>
//         <Navigation />
//         <Project />
//         <Footer />
//       </div>
//     </div>

//   );
// }
function renderPage(currentPage) {
  if (currentPage === 'About') {
    return < About />
  }
  if (currentPage === 'Contact') {
    return <Contact />
  }
  if (currentPage === 'Portfolio') {
    return <Portfolio />
  }
  if (currentPage === 'Resume') {
    return <Resume />
  }
};

function App() {
  const [currentPage, setCurrentPage] = useState('About');
  return (
    <div className=' pop text-light h-fit-content' style={{ height: '100%', minHeight: '100vh', minWidth: '100vw', display: 'flex', flexDirection: 'column' }}>
      <div>
        <Header />
        <nav className='d-flex justify-content-end  card-img-overlay' >
          <a className="m-2" style={{ color: 'white' }} onClick={() => setCurrentPage('About')}>About</a>
          <a className="m-2" style={{ color: 'white' }} onClick={() => setCurrentPage('Contact')}>Contact</a>
          <a className="m-2" style={{ color: 'white' }} onClick={() => setCurrentPage('Portfolio')}>Portfolio</a>
          <a className="m-2" style={{ color: 'white' }} onClick={() => setCurrentPage('Resume')}>Resume</a>
        </nav>
      </div>
      {renderPage(currentPage)}
      <Footer />
    </div>)

}

export default App;

/* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */