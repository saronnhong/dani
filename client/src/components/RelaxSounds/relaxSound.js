import React, { Component } from "react";

import relaxes from "./relaxSounds.json";
import "./style.css";
import Player from "../Player";

var playing =true;
// class Player extends Component {

//     audio = new Audio(this.props.relax.sound)

//     playSound = () => {
//         this.audio.play();
//     }

//     pauseSound = () => {
//         this.audio.pause();
//     }

//     render() {
//         const { relax } = this.props;
//         return (
//             <div key={relax.id} className="col-md-3">
//                 <div className="cardRelax">
//                     <div onClick={() => playing ? (this.playSound(), playing=false) : (this.pauseSound(), playing=true)}>
//                         <img className="relaxImg" alt="" src={relax.image} />
//                     </div>
//                 </div>
//             </div>

//         )
//     }
// }

class RelaxSounds extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    {relaxes.map((relax) => {
                        return (
                            <Player relax={relax} />
                        )
                    }
                    )}
                </div>
            </div>
        )
    }
}

export default RelaxSounds;


