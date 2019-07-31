import React, { Component } from "react";

import animals from "./relaxSounds.json";
import "./style.css";

var oneSound = (new Audio("https://freesound.org/data/previews/390/390879_197130-lq.mp3"));

class RelaxSounds extends Component {
    render() {
        return (
            <div className="container">
            <div className="row">
                {animals.map((animal) =>
                    <div className="col-md-3">
                        <div className="cardRelax">
                            <a href="# " onClick={() => oneSound.play()}>
                                <img className= "relaxImg" alt="" src={animal.image} />
                            </a>
                        </div>
                        <button onClick={() => {
                            oneSound.pause();
                            }}>Stop</button>
                    </div>
                )}
            </div>
            
            </div>
        )
    }
}

export default RelaxSounds;


