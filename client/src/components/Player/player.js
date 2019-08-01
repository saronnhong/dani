import React, { Component } from "react";

let playing = false;
class Player extends Component {
    audio = new Audio(this.props.player.sound)

    playSound = () => {
        this.audio.play();
    }

    pauseSound = () => {
        this.audio.pause();
    }

    render() {
        const { player } = this.props;
        return (
            <div key={player.id} className="col-md-3">
                <div className="cardRelax">
                    <div onClick={() => playing ? (this.pauseSound(), playing=false): (this.playSound(), playing=true) }>
                        <img className="relaxImg" alt="" src={player.image} />
                    </div>
                </div>
            </div>

        )
    }
}

export default Player;