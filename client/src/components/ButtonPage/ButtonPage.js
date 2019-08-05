import React, { Component } from 'react';
import withAuth from './../withAuth';
import API from './../../utils/API';
import { Link } from "react-router-dom";
import Back from '../Back';

import "./style.css";

class ButtonPage extends Component {
    state = {
        metricID: "",
        metrics: []
    };

    componentDidMount() {
        if (this.props.history.location.pathname.length > 1) {
            API.getUser(this.props.user.id).then(res => {
                this.setState({
                    metricID: res.data.metric
                })
                let pageOn = this.props.history.location.pathname.replace("/", "")
                API.addToMetrics(res.data.metric, pageOn)
            });
        }
    }

    render() {
        return (

            <div className="container containerSounds">
                <div className="row">
                    <div className="col-md">
                        <span>
                            <Link to={this.props.linkOne}>
                                <button type="button" className="btn btn-danger menuButton animalButton">{this.props.buttonOne}</button>
                            </Link>
                            <Link to={this.props.linkTwo}>
                                <button type="button" className="btn btn-secondary menuButton natureButton">{this.props.buttonTwo}</button>
                            </Link>
                            <Link to={this.props.linkThree}>
                                <button type="button" className="btn btn-primary menuButton relaxButton">{this.props.buttonThree}</button>
                            </Link>
                        </span>
                    </div>
                </div>

                <footer>
                    <div className="row">
                            <Link to={this.props.backLink}>
                                <div>{this.props.backButton}</div>
                            </Link>
                    </div>
                </footer>

            </div>
        )
    }
}

export default withAuth(ButtonPage);


