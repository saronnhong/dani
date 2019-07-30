import React, { Component } from "react";

import animals from "./animalSounds.json";
import "./style.css";

class Sound extends Component {
    render() {
        return (
            <div className="wrapper">
                <div className="container">
                    <div className="row">
                {animals.map((animal) =>
                    <div className="col-md-2">
                        <div className="card">
                            <a href="# " onClick={() => (new Audio(animal.sound)).play()}>
                                <img className="animalImg"alt="# " src={animal.image} />
                            </a>
                        </div>
                    </div>
                )}
                </div>
                </div>
            </div>
        )
    }
}

export default Sound;


