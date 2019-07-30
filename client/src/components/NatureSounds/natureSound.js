import React, { Component } from "react";

import animals from "./natureSounds.json";
import "./style.css";

class Sound extends Component {
    render() {
        return (
            <div className="wrapper">
                {animals.map((animal) =>
                    <div className="container col-md-4">
                        <div className="card">
                            <a href="# " onClick={() => (new Audio(animal.sound)).play()}>
                                <img className= "natureImg" alt="" src={animal.image} />
                            </a>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}

export default Sound;


