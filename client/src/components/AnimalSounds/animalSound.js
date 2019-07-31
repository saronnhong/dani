import React, { Component } from "react";

import animals from "./animalSounds.json";
import "./style.css";

class AnimalSound extends Component {
    render() {
        return (
            // <div className="wrapper">
            <div>
                
                <div className="container animalContainer">
                    {/* <div className="row"> */}
                {animals.map((animal) =>
                    // <div className="col-md-2">
                        // <div className="cardAnimals">
                            <a href="# " onClick={() => (new Audio(animal.sound)).play()}>
                                <img width="100px" className="animalImg"alt="# " src={animal.image} id={animal.name}/>
                            </a>
                        // </div>
                    // </div>
                )}
                </div>
                
                </div>
            // </div>
        )
    }
}

export default AnimalSound;