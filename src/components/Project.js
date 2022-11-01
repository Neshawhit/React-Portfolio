import React from 'react';
// //import logo from './logo.svg';
// import passwordGen from './assets/Password-Generator.png'
// import codeQuiz from './assets/Code-Quiz.png'
// import dailyPlanner from './assets/daily-planner.png'
// import noteTaker from './assets/note-taker.png'
// import teamProfiles from './assets/Team-profiles.png'
// import solarClicker from './assets/solar-clicker.png'
import {useState} from 'react'



export default function Project() {
  
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };
  
  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <section className='porfolio container row'>




    </section>
  )
}

// <div className="row justify-content-around" >
// <div className='project1 col-4 text-wrapper' style={{ padding: '20px', position: 'absolute-cover', backGroundColor:'rgba(0,0,0,0.8)', color: 'white'}}>
//   <img src={codeQuiz} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className="code-quiz-img" href="https://neshawhit.github.io/Code-Quiz/" target="blank" alt="Code-Quiz" />
//   {isHovering && <p style={{ padding: '20px', position: 'absolute-cover', backGroundColor:'rgba(0,0,0,0.8)', color: 'white'}}>
//     Edit <code>src/App.js</code> and save to reload.
//    <h2>Hello world</h2>
//   </p>}
// </div>
// <a
//   className="github-link"
//   href="https://github.com/Neshawhit/Code-Quiz"
//   target="_blank"
//   rel="noopener noreferrer"
// >
//   Github
// </a>
// <div className='project2 col-4'>
//   <img src={passwordGen} className="PasswordGen-img" href="https://neshawhit.github.io/Password-Generator/" target="blank" alt="Password-Generator" />
//   <p>
//     Password Generator is an application that allows you to create a randomized password using the parameters of your choosing.
//   </p>
//   <a
//     className="github-link"
//     href="https://github.com/Neshawhit/Password-Generator"
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     Github
//   </a>
// </div>
// </div>
// <br className='w-100'></br>

// <div className='project3 col-4'>
// <img src={dailyPlanner} className="daily-planner-img" href="https://neshawhit.github.io/Daily-Planner/" alt="Daily-Planner" />
// <p>
//   Edit <code>src/App.js</code> and save to reload.
// </p>
// <a
// className="github-link"
// href="https://github.com/Neshawhit/Daily-Planner"
// target="_blank"
// rel="noopener noreferrer"
// >
// Github
// </a>
// </div>
// <div className='project4 col-4'>
// <img src={noteTaker} className="note-taker-img" href="https://my-notetaker24.herokuapp.com/" alt="note-taker" />
// <p>
//   Edit <code>src/App.js</code> and save to reload.

// </p>
// <a
//   className="github-link"
//   href="https://github.com/Neshawhit/note-taker"
//   target="_blank"
//   rel="noopener noreferrer"
// >
//   Github
// </a>
// </div>
// <div className='project5 col'>
// <img src={teamProfiles} className="team-profiles-img" /* href="" */ alt="team-profiles" />
// <p>
//   Edit <code>src/App.js</code> and save to reload.
//   Github:
// </p>
// <a
//   className="github-link"
//   href="https://github.com/Neshawhit/Team-Profiles"
//   target="_blank"
//   rel="noopener noreferrer"
// >
//   Github
// </a>
// </div>
// <div className='project6 col'>
// <img src={solarClicker} className="solar-clicker-img" href="https://young-oasis-85311.herokuapp.com/login" alt="solar-clicker" />
// <p>
//   Edit <code>src/App.js</code> and save to reload.
// </p>
// <a
//   className="github-link"
//   href="https://github.com/SupernalDeity/solar-clicker"
//   target="_blank"
//   rel="noopener noreferrer"
// >
//   Github
// </a>
// </div>