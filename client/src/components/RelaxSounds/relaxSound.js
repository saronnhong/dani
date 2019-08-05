import React, { Component } from "react";

import relaxes from "./relaxSounds.json";
import { Link } from "react-router-dom";
import Back from "../Back"
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
                <div className="row">
                    <div className="column-lg-12 natureBackCol relaxBackCol">
                        <footer className="natureFooter relaxFooter">
                            <Link to="/Listen">
                                <Back />
                            </Link>
                        </footer>
                    </div>
                </div>
            </div>
        )
    }
}

export default withAuth(RelaxSounds);


