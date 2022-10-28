//import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Navigation from './Navigation'
import headerBackGround from "./assets/vector-banner-design-circuit-board-260nw-1233925105.jpg"
//import Navigation from './src/components/Navigation'
//import './src/css/header.css'

export default function Header() {
    return (
        <div>
            <img className="card-img" style= {{height: '150px'}} src={headerBackGround} alt="Card image"></img>
            <div classname="jumbotron jumbotron-fluid  text-light " styly={{}}>
                <div className='card-img-overlay'>
                    <div className="container " style={{  textAlign: "center"}}>
                        <h1 className="display-4">Antwanesha Whitmire</h1>
                        <p className="lead text-light" style={{fontSize: '15px'}}>  "My mission in life is not merely to survive, but to thrive; and to do so with some passion, some compassion, some humor, and some style." -Maya Angelou</p>
                    </div>
                    <Navigation />
                </div>
            </div>
        </div>
    )
}






// export.default Header;