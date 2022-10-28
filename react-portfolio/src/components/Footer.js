import React from 'react';

export default function Footer() {
    return (
        <footer className='d-flex align-items-end text-light' style={{marginTop: 'auto'}}>
          <a
        className="github-link m-2 text-light"
          href="https://github.com/Neshawhit"
          target="_blank"
          rel="noopener noreferrer"
        >
         Github
        </a>
        <a
        className="Indeed-link m-2 text-light"
          href="https://my.indeed.com/p/antwaneshaw-fqtqgnz/preview"
          target="_blank"
          rel="noopener noreferrer"
        >
         Indeed
        </a>
        <a
        className="business-site m-2 text-light"
          href="https://soulpoweredholistics.com"
          target="_blank"
          rel="noopener noreferrer"
        >
         Soul Powered Holistics
        </a>
        
        </footer>
    )
}

// THEN I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles, and their profile on a third platform (Stack Overflow, Twitter)