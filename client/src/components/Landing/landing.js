import React, { Component } from "react";

// import animals from "./animalSounds.json";
import "./style.css";
import Navbar from '../Navbar';

// componentWillUnmount() {

// }


class Landing extends Component {
    render() {
        return (
            <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 mx-auto logoImg">
                        <img className = "puzzleImg" src="/img/green.png" alt="puzzleLogo"/>
                            <button type="button" class="btn btn-success signUpButton">Sign Up</button>
                            <button type="button" class="btn btn-success logInButton">Log In</button>
                    </div>
                </div>
                <div className="row">
                <h3 className="quote">"Developing And Nurturing Interface, A Place For Eager Minds To Stay Engaged"</h3>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-success" >
                <div className="container">
                    <div className="footerText">
                    DANI developed by Max, Rebecca, Marina, and Saron
                    </div>
                </div>
            </nav>
            </div>
        )
    }
}

export default Landing;