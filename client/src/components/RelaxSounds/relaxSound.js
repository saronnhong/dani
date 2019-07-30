import React, { Component } from "react";

import animals from "./relaxSounds.json";
import "./style.css";

class RelaxSounds extends Component {
    render() {
        return (
            <div className="container">
            <div className="row">
                {animals.map((animal) =>
                    <div className="col-md-3">
                        <div className="cardRelax">
                            <a href="# " onClick={() => (new Audio(animal.sound)).play()}>
                                <img className= "relaxImg" alt="" src={animal.image} />
                            </a>
                        </div>
                    </div>
                )}
            </div>
            </div>
        )
    }
}

export default RelaxSounds;


