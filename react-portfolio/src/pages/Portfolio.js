import React from 'react'

import passwordGen from './assets/Password-Generator.png'
import codeQuiz from './assets/Code-Quiz.png'
import dailyPlanner from './assets/daily-planner.png'
import noteTaker from './assets/note-taker.png'
import teamProfiles from './assets/Team-profiles.png'
import solarClicker from './assets/solar-clicker.png'
import { useState } from 'react'
import './assets/portfolio.css'



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
            <div classname='projects' style={{}}>
                <div className='row justify-content-around mb-4' style={{ marginRight: '200px' }}>
                    <div className=' project1 m-2 col-6 row justify-content-around mb-4'>
                        <a href="https://neshawhit.github.io/Code-Quiz/" target="blank">
                            <img src={codeQuiz} className="codeQuiz-img" alt="Code Quiz" />

                        </a>
                        <p>
                            Short quiz testing one's basic coding Knowledge.

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
                        <a href="https://neshawhit.github.io/Password-Generator/" target="blank">
                            <img src={passwordGen} className="PasswordGen-img" alt="Password-Generator" />

                        </a>
                        <p className=''>
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
                        <a href="https://neshawhit.github.io/Daily-Planner/" target="blank">
                            <img src={dailyPlanner} className="daily-planner-img" alt="Daily-Planner" />

                        </a>
                        <p>
                            Application that allows it's users to manage and maintain their schedule in their personal work week.
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
                        <a href="https://my-notetaker24.herokuapp.com/" target="_blank">
                            <img src={noteTaker} className="note-taker-img" alt="note-taker" />

                        </a>
                        <p>
                            Application that allows it's user to make quick and easy notes to help them keep with any task or new information.

                        </p>
                        <a
                            className="github-link"
                            href="https://github.com/Neshawhit/note-taker "
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Github
                        </a>
                    </div>
                </div>
                <div className='row justify-content-around mb-4' style={{ marginRight: '200px' }}>
                    <div className='project5 m-2 col-6'>
                        <a href="https://neshawhit.github.io/Team-Profiles/dist/team.html" target="blank">
                            <img src={teamProfiles} className="team-profiles-img" alt="team-profiles" />

                        </a>
                        <p>
                            Team Profiles is an application that can help any business or office manager create an organized spread sheet of current employees in just a few basic steps.

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
                        <a href="https://young-oasis-85311.herokuapp.com/login" target="blank">
                            <img src={solarClicker} className="solar-clicker-img" alt="solar-clicker" />

                        </a>
                        <p>
                            Solar clicker is a clicker game that helps users relieve stress and refocus the mind click by click.
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