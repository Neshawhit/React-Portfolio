import React from 'react'

import passwordGen from './assets/Password-Generator.png'
import codeQuiz from './assets/Code-Quiz.png'
import dailyPlanner from './assets/daily-planner.png'
import noteTaker from './assets/note-taker.png'
import teamProfiles from './assets/Team-profiles.png'
import solarClicker from './assets/solar-clicker.png'

const Portfolio = () => {
    return (
        <section className='porfolio container column'>
            <h1 style={{ fontFamily: 'Indie Flower' }}>Portfolio</h1>
            <div className='row justify-content-around'>
                <div className=' project1 m-2 col-4'>

                    {/* <p>
                    Edit <code>src/App.js</code> and save to reload.

                </p> */}
                    <a
                        className="github-link"
                        href="https://github.com/Neshawhit/Code-Quiz"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={codeQuiz} className="codeQuiz-img" href="https://github.com/Neshawhit/Code-Quiz" target="blank" alt="Code Quiz" />
                    </a>
                </div>
                <div className=' col-4 m-2 project2'>

                    {/* <p>
                    Password Generator is an application that allows you to create a randomized password using the parameters of your choosing.
                </p> */}
                    <a
                        className="github-link"
                        href="https://github.com/Neshawhit/Password-Generator"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={passwordGen} className="PasswordGen-img" href="https://neshawhit.github.io/Password-Generator/" target="blank" alt="Password-Generator" />
                    </a>
                </div>
            </div>
            <div className='row justify-content-around' >
                <div className='project3 m-2 col-4'>

                    {/* <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p> */}
                    <a
                        className="github-link"
                        href="https://github.com/Neshawhit/Daily-Planner"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={dailyPlanner} className="daily-planner-img" href="https://neshawhit.github.io/Daily-Planner/" alt="Daily-Planner" />
                    </a>
                </div>
                <div className='project4 m-2 col-4'>

                    {/* <p>
                    Edit <code>src/App.js</code> and save to reload.

                </p> */}
                    <a
                        className="github-link"
                        href="https://github.com/Neshawhit/note-taker"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={noteTaker} className="note-taker-img" href="https://my-notetaker24.herokuapp.com/" alt="note-taker" />
                    </a>
                </div>
            </div>
            <div className='row justify-content-around'>
                <div className='project5 m-2 col-4'>

                    {/* <p>
                    Edit <code>src/App.js</code> and save to reload.
                    Github:
                </p> */}
                    <a
                        className="github-link"
                        href="https://github.com/Neshawhit/Team-Profiles"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={teamProfiles} className="team-profiles-img" /* href="" */ alt="team-profiles" />
                    </a>
                </div>
                <div className='project6 m-2 col-4'>

                    {/* <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p> */}
                    <a
                        className="github-link"
                        href="https://github.com/SupernalDeity/solar-clicker"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={solarClicker} className="solar-clicker-img" href="https://young-oasis-85311.herokuapp.com/login" alt="solar-clicker" />
                    </a>
                </div>
            </div>


        </section>

    )
}



export default Portfolio;