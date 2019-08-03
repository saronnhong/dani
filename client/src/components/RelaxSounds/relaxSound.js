import React, { Component } from "react";

import relaxes from "./relaxSounds.json";

import API from './../../utils/API';
import withAuth from './../withAuth';
import "./style.css";
import Player from "../Player";


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
    state = {
        metricID: "",
        metrics: []
    }

    componentDidMount() {
        API.getUser(this.props.user.id).then(res => {
            this.setState({
                metricID: res.data.metric
            })
            let pageOn = this.props.history.location.pathname.replace("/", "")
            API.addToMetrics(res.data.metric, pageOn)
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    {relaxes.map((relax) => {
                        return (
                            <Player player={relax} />
                        )}
                    )}
                </div>
            </div>
        )
    }
}

export default withAuth(RelaxSounds);


