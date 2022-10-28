import React from 'react'
import PropTypes from 'prop-types';
import me from './assets/IMG_6523.JPG'
import './assets/about.css'


const About = props => {
    return (
        <div className='row'>
            <div className='col'>
                <h1 className='m-3' style={{ fontFamily: 'Indie Flower' }}>About</h1>
                <img src={me} style={{ display: 'flex', borderRadius: '20px', justifyContent: 'start', height: '400px' }} className="img-fluid img-profile  d-flex justify-content-start rounded-circle mx-auto mb-2 img-fluid img-me rounded mx-auto d-block "
                    alt="img-Antwanesha-Whitmire">
                </img>
            </div>
            <div className='col mr-5 ' style={{  }}>
                <p className='container mt-5 ' style={{ fontFamily: 'Ubuntu', border: "solid 2px #00111F", backgroundColor: "#29689C" }}>
                    I am a College Graduate, with a Bachelors of Sociology degree from UNCC. Currently, I am a Coding
                    Bootcamp Student willfully seeking a new journey and new opportunties. I am seeking a Freelance Web
                    Development Career after completing the bootcamp.
                    Traveling is a great passion of mine and so far I've been able to include it with my current field.
                    Hopefully i can maintain that passion as embark on this new adventure. I'm an owner of a mobile herbal
                    shop, I travel to various areas for rare fruits, veggies and herbs. Web development allows me to have a
                    great balance of Tech and Nature.
                </p>
            </div>
        </div>
    )
}

About.propTypes = {}

export default About;