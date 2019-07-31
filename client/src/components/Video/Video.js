import React, { Component } from "react";

import ReactPlayer from 'react-player'
import videos from "./videos.json";
import "./style.css";


class Video extends Component {
    state = {
        playing: false
    }
    
    
    
    render() {
        return (

            <div>
                {/* turnary */}
                {this.state.playing ? (


                    <div className="wrapper" >
                        {videos.map((video) =>
                            <div className="video-wrapper">
                                <p>{video.name}</p>
                                <ReactPlayer onClick={() =>
                                    this.setState({ playing: false })
                                }
                                    url={video.video} playing />
                            </div>
                        )}
                    </div>) : (
                        <div className="wrapper">
                            {videos.map((video) =>
                                <div className="video-wrapper">
                                     <p>{video.name}</p>
                                    <ReactPlayer onClick={() =>
                                        this.setState({ playing: true })
                                    }
                                        url={video.video} />
                                </div>
                            )}
                        </div>

                    )}
            </div>
        )
    }
}

export default Video;