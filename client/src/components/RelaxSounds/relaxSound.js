import React, { Component } from "react";

import animals from "./relaxSounds.json";
import "./style.css";

const audioElements = {};

// var oneSound = (new Audio("https://freesound.org/data/previews/390/390879_197130-lq.mp3"));

class Sound extends Component {

    audio = new Audio(this.props.animal.sound)

    playSound = () => {
        this.audio.play();
    }

    pauseSound = () => {
        this.audio.pause();
    }

    render() {
        const {animal} = this.props;
        return (
            <div key={animal.id} className="col-md-3">
                <div className="cardRelax">
                    <div onClick={() => this.playSound()}>
                        <img className="relaxImg" alt="" src={animal.image} />
                    </div>
                </div>
                <button onClick={() => this.pauseSound()}>Stop</button>
            </div>

        )
    }
}

class RelaxSounds extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    {animals.map((animal) => {
                        return (
                            <Sound animal={animal} />
                        )
                    }
                    )}
                </div>

            </div>
        )
    }
}

export default RelaxSounds;


