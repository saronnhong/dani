import React, { Component } from "react";
import { Link } from "react-router-dom";
import Back from "../Back";
import natures from "./natureSounds.json";
import API from './../../utils/API';
import withAuth from './../withAuth';
import Player from "../Player";
import "./style.css";

class NatureSounds extends Component {
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
                    {natures.map((nature) => {
                        return (
                            <Player key={nature.name} player={nature} />
                        )
                    }
                    )}
                </div>
                <div className="row">
                    <div className="column-lg-12 natureBackCol">
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

export default withAuth(NatureSounds);


