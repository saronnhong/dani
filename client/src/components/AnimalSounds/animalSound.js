import React, { Component } from "react";

import animals from "./animalSounds.json";
import "./style.css";

class AnimalSound extends Component {
    render() {
        return (
            <div>
                <div className="animalContainer">
                    {animals.map((animal) =>
                        <a onClick={() => (new Audio(animal.sound)).play()}>
                            <img width="100px" className="animalImg" alt="# " src={animal.image} id={animal.name} />
                        </a>
                    )}
                </div>
            </div>
        )
    }
}

export default AnimalSound;