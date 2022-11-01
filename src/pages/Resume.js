import React from 'react'

const Resume = () => {
    return (
        <div className='mx-5'>
            <h1 className='mx-3' style={{ fontFamily: 'Indie Flower' }}>Resume</h1>
            <a
                className="Resume m-2"
                href="https://my.indeed.com/p/antwaneshaw-fqtqgnz"
                target="_blank"
                rel="noopener noreferrer"
            >
                Download Resume
            </a>
            <p className='m-2'  style={{ fontFamily: 'Ubuntu'}}>
                Front-End Proficiencies
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>JQuery</li>
                    <li>Responsive Design</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                </ul>
            </p>
            <p className='m-2' style={{ fontFamily: 'Ubuntu'}}>
                <ul>
                    <li>APIs</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>MySQL, Sequelize</li>
                    <li>MongoDB, Mongoose</li>
                    <li>REST</li>
                    <li>GraphQL</li>
                </ul>
            </p>

        </div>
    )
}



export default Resume;