//import logo from './logo.svg';
import React from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Project from "./components/Project";
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <div className="App">

      <div>
        <Header/>
        <Navigation />
        <Project />
        <Footer />
      </div>
    </div>

  );
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