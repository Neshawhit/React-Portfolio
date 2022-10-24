import React from 'react';
//import logo from './logo.svg';
import passwordGen from './Password-Generator.png'
import codeQuiz from './Code-Quiz.png'
import dailyPlanner from './daily-planner.png'
import noteTaker from './note-taker.png'
import teamProfiles from './Team-profiles.png'
import solarClicker from './solar-clicker.png'



export default function Project() {
    return (
       <section className='porfolio'>
        <div className='project1'>
        <img  src ={ codeQuiz } className="code-quiz-img" href="https://neshawhit.github.io/Code-Quiz/" target="blank" alt="Code-Quiz" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        
        </p>
        <a
        className="github-link"
          href="https://github.com/Neshawhit/Code-Quiz"
          target="_blank"
          rel="noopener noreferrer"
        >
         Github
        </a>
        </div>
        <div className='project2'>
        <img src={ passwordGen } className="PasswordGen-img" href="https://neshawhit.github.io/Password-Generator/" target="blank" alt="Password-Generator" />
        <p>
          Password Generator is an application that allows you to create a randomized password using the parameters of your choosing. 
        </p>
        <a
       className="github-link"
          href="https://github.com/Neshawhit/Password-Generator"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        </div>
        <div className='project3'>
        <img src={ dailyPlanner } className="daily-planner-img" href="https://neshawhit.github.io/Daily-Planner/" alt="Daily-Planner" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="github-link"
          href="https://github.com/Neshawhit/Daily-Planner"
          target="_blank"
          rel="noopener noreferrer"
        >
      Github
        </a>
        </div>
        <div className='project4'>
        <img  src={ noteTaker } className="note-taker-img" href="https://my-notetaker24.herokuapp.com/" alt="note-taker" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
       
        </p>
        <a
        className="github-link"
          href="https://github.com/Neshawhit/note-taker"
          target="_blank"
          rel="noopener noreferrer"
        >
         Github
        </a>
        </div>
        <div className='project5'>
        <img  src={ teamProfiles }className="team-profiles-img" /* href="" */ alt="team-profiles" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          Github:
        </p>
        <a
      className="github-link"
          href="https://github.com/Neshawhit/Team-Profiles"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        </div>
        <div className='project6'>
        <img  src={ solarClicker } className="solar-clicker-img" href="https://young-oasis-85311.herokuapp.com/login" alt="solar-clicker" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
        className="github-link"
          href="https://github.com/SupernalDeity/solar-clicker"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        </div>
        

       </section>
    )
}
