import React, { Component } from "react";
import { Link } from 'react-router-dom';

// import animals from "./animalSounds.json";
import "./style.css";

// componentWillUnmount() {

// }


class Landing extends Component {

    render() {
        return (
            <div>
                <br /><br /><br />
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 mx-auto logoImg">
                            <img className="puzzleImg" src={process.env.PUBLIC_URL + '/dani_logo.png'} alt="puzzleLogo" />
                            <br />
                            <h1 className="brand-landing-text"> DANI</h1>
                            <br></br>
                            <Link className="btn btn-success signUpButton" to="/signup">Sign Up </Link>
                            <Link className="btn btn-success logInButton" to="/login">Log In </Link>

                        </div>
                    </div>
                    <br></br><br></br>
                    <div className="mx-auto">
                        <h3 className="quote">"Developing And Nurturing Interface, A Place For Eager Minds To Stay Engaged"</h3>
                    </div>
                </div>
                <br /><br /><br />
                <br /><br /><br />
                <br /><br /><br />
                <div className="footer-container">
                    <p>
                        DANI developed by <a target="_blank" rel="noopener noreferrer" className="footer-text-link" href="https://github.com/RhadMax"><i className="fab fa-github"></i> Max Patten,</a>
                        <a target="_blank" rel="noopener noreferrer" className="footer-text-link" href="https://github.com/rschle"><i className="fab fa-github"></i> Rebecca Schleimer,</a>
                        <a target="_blank" rel="noopener noreferrer" className="footer-text-link" href="https://github.com/marinadelkovamoro"><i className="fab fa-github"></i> Marina Delkova-Moro,</a> and
                        <a target="_blank" rel="noopener noreferrer" className="footer-text-link" href="https://github.com/saronnhong"><i className="fab fa-github"></i> Saron Nhong</a>
                    </p>
                </div>
            </div>
        )
    }
}

export default Landing;