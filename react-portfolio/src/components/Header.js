//import React, { Component } from 'react'
import ReactDOM from 'react-dom'
//import Navigation from './src/components/Navigation'
//import './src/css/header.css'

export default function Header() {
    return (
        <div>
            <div classname="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Fluid jumbotron</h1>
                    <p className="lead text-dark">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                </div>
           <p> Helloo</p>
            </div>
        </div>
    )
}

ReactDOM.render(<Header />, document.getElementById('header'));




// export.default Header;