import React, { useState } from 'react';
// import resume from 

export default function Navigation() {

    // const [aboutMe, setAboutMe] = useState('');
    // let [portfolio, setPortfolio] = useState('');
    // let [contact, setContact] = useState('');
    // let [resume, setResume] = useState('');

  const [currentPage, setCurrentPage] = useState('About');

    return (
        <div className=' text-white d-flex align-content-end'>
           {/* <nav>
    <a className="text-dark" onClick={() => setCurrentPage('About')}>About</a>
    <a onClick={() => setCurrentPage('Contact')}>Contact</a>
    <a onClick={() => setCurrentPage('Portfolio')}>Portfolio</a>
    <a onClick={() => setCurrentPage('Resume')}>Resume</a>
  </nav> */}

        </div>
    )
}

// WHEN I view the navigation titles
// THEN I am presented with the titles About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted
// WHEN I click on a navigation title
// THEN I am presented with the corresponding section below the navigation without the page reloading and that title is highlighted
// WHEN I load the portfolio the first time

