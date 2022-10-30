import React from 'react'

import passwordGen from './assets/Password-Generator.png'
import codeQuiz from './assets/Code-Quiz.png'
import dailyPlanner from './assets/daily-planner.png'
import noteTaker from './assets/note-taker.png'
import teamProfiles from './assets/Team-profiles.png'
import solarClicker from './assets/solar-clicker.png'
import { useState } from 'react'



const Portfolio = () => {

    // const [isHovering, setIsHovering] = useState(false);

    // const handleMouseOver = () => {
    //     setIsHovering(true);
    // };

    // const handleMouseOut = () => {
    //     setIsHovering(false);
    // };
    

    return (
        <section className='porfolio container column'>
            <h1 style={{ fontFamily: 'Indie Flower' }}>Portfolio</h1>
            <div style={{}}>
                <div className='row justify-content-around mb-4' style={{ marginRight: '200px' }}>
                    <div className=' project1 m-2 col-6'>
                        <img src={codeQuiz} className="codeQuiz-img" href="https://neshawhit.github.io/Code-Quiz/" target="blank" alt="Code Quiz" />
                        && <p>
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
                    <div className=' col-4 m-2 project2'>
                        <img src={passwordGen}  className="PasswordGen-img" href="https://neshawhit.github.io/Password-Generator/" target="blank" alt="Password-Generator" />
                        && <p>
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
                </div>
                <div className='row justify-content-around mb-4' style={{ marginRight: '200px' }} >
                    <div className='project3 m-2 col-6'>
                        <img src={dailyPlanner} className="daily-planner-img" href="https://neshawhit.github.io/Daily-Planner/" alt="Daily-Planner" />
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
                    <div className='project4 m-2 col-4'>
                        <img src={noteTaker} className="note-taker-img" href="https://my-notetaker24.herokuapp.com/" alt="note-taker" />
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
                </div>
                <div className='row justify-content-around mb-4' style={{ marginRight: '200px' }}>
                    <div className='project5 m-2 col-6'>
                        <img src={teamProfiles} className="team-profiles-img"  href="https://neshawhit.github.io/Team-Profiles/dist/team.html"  alt="team-profiles" />
                        <p>
                            Edit <code>src/App.js</code> and save to reload.

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
                    <div className='project6 m-2 col-4'>

                        <img src={solarClicker} className="solar-clicker-img" href="https://young-oasis-85311.herokuapp.com/login" alt="solar-clicker" />
                        <p>
                            Edit <code>src/App.js</code> and save to reload.
                        </p>
                        <a
                            className="github-link"
                            href="https://github.com/SupernalDeity/solar-clicker"
                            target="_blank"
                            rel="noopener noreferrer"
                        >Github
                        </a>
                    </div>
                </div>
            </div>


        </section>

    )
}



export default Portfolio;