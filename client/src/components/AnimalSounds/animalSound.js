import React, { Component } from "react";

import API from './../../utils/API';
import withAuth from './../withAuth';
import animals from "./animalSounds.json";
import "./style.css";

class AnimalSound extends Component {
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
            <div>
                <div className="animalContainer">
                    {animals.map((animal) =>
                        <a onClick={() => (new Audio(animal.sound)).play()}>
                            <img width="100px" className="animalImg" alt="# " src={animal.image} id={animal.name} />
                        </a>
                    )}
                </div>
            </div>
        )
    }
}

export default withAuth(AnimalSound);