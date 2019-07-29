import React, { Component } from "react";

import ReactPlayer from 'react-player';


class Sound extends Component {
    state = {
        playing: false
       
    }

    playSound = () => {
        this.setState({ playing: true })
    }

    onEnded = () => {
        this.setState({ playing: false })
    }


    render() {
        return (
            <div>
                <a onClick={this.playSound}>{this.state.playing && <ReactPlayer url={process.env.PUBLIC_URL + "/sounds/animal-sounds/moo.wav"} playing onEnded={this.onEnded} />}
                    <img src={process.env.PUBLIC_URL + "/sounds/animal-images/cow.png"} />
                </a>

                <a onClick={this.playSound}>{this.state.playing && <ReactPlayer url={process.env.PUBLIC_URL + "/sounds/animal-sounds/koze.wav"} playing onEnded={this.onEnded} />}
                    <img src={process.env.PUBLIC_URL + "/sounds/animal-images/goat.jpg"} />
                </a>

                <a onClick={this.playSound}>{this.state.playing && <ReactPlayer url={process.env.PUBLIC_URL + "/sounds/animal-sounds/chicken.mp3"} playing onEnded={this.onEnded} />}
                    <img src={process.env.PUBLIC_URL + "/sounds/animal-images/chicken.jfif"} />
                </a>

            </div>
        )
    }
}

export default Sound;