import React, { Component } from "react";

import animals from "./animalSounds.json";
import "./style.css";

class Sound extends Component {
    render() {
        // var audio = new Audio(animals[0].sound)
        return (
            <div className="wrapper">
                {animals.map((animal) =>
                    <div className="container col-md-4">
                        <div className="card">
                            <a href="#" onClick={() => (new Audio(animal.sound)).play()}>
                                <img width="200px" src={animal.image} />
                            </a>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}

export default Sound;


