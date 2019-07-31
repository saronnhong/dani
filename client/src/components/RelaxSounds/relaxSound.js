import React, { Component } from "react";

import animals from "./relaxSounds.json";
import "./style.css";


class Sound extends Component {

    audio = new Audio(this.props.animal.sound)

    playSound = () => {
        this.audio.play();
    }

    pauseSound = () => {
        this.audio.pause();
    }

    render() {
        const { animal } = this.props;
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


