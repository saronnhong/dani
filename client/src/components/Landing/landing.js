import React, { Component } from "react";

// import animals from "./animalSounds.json";
import "./style.css";

// componentWillUnmount() {

// }


class Landing extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4 mx-auto logoImg">
                        <img className = "puzzleImg" src="/img/green.png" alt="puzzleLogo"/>
                        
                            <button type="button" class="btn btn-success signUpButton">Sign Up</button>
                            <button type="button" class="btn btn-success logInButton">Log In</button>
                       


                    </div>
                </div>
                <div className="row">
                <h3 className="quote">"Developing and Nurturing Interface, A Place For Eager Minds To Stay Engaged"</h3>
                </div>
            </div>
        )
    }
}

export default Landing;