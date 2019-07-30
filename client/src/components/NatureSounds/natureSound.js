import React, { Component } from "react";

import animals from "./natureSounds.json";
import "./style.css";

class NatureSounds extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                {animals.map((animal) =>
                    <div className="col-md-4">
                        <div className="cardNature">
                            <a href="# " onClick={() => (new Audio(animal.sound)).play()}>
                                <img className= "natureImg" alt="" src={animal.image} />
                            </a>
                        </div>
                    </div>
                )}
                </div>
            </div>
        )
    }
}

export default NatureSounds;


