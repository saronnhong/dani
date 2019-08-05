import React, { Component } from "react";

import ReactPlayer from 'react-player'
import videos from "./videos.json";
import Back from "../Back"
import { Link } from "react-router-dom"
import API from './../../utils/API';
import withAuth from './../withAuth';
import "./style.css";


class Video extends Component {
    state = {
        playing: false,
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
                {/* turnary */}
                {this.state.playing ? (


                    <div className="wrapper wrap-background" >
                        {videos.map((video) =>
                            <div key={video.name} className="video-wrapper">
                                <p className="video-name">{video.name}</p>
                                <ReactPlayer onClick={() =>
                                    this.setState({ playing: false })
                                }
                                    url={video.video} playing />
                            </div>
                        )}
                    </div>) : (
                        <div className="wrapper wrap-background">
                            {videos.map((video) =>
                                <div key={video.name} className="video-wrapper">
                                    <p className="video-name">{video.name}</p>
                                    <ReactPlayer onClick={() =>
                                        this.setState({ playing: true })
                                    }
                                        url={video.video} />
                                </div>
                            )}

                            <div className="row">
                                <div className="column-lg-12 vidBackCol">
                                    <footer className="vidFooter">
                                        <Link to="/Look">
                                            <Back />
                                        </Link>
                                    </footer>
                                </div>
                            </div>
                        </div>


                    )}
            </div>
        )
    }
}

export default withAuth(Video);