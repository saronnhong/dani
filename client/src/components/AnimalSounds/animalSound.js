import React, { Component } from "react";
import Back from "../Back";
import { Link } from "react-router-dom";
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
                <div className="row">
                        <div className="column-lg-12 animalBackCol">
                            <footer className="animalFooter">
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

export default withAuth(AnimalSound);