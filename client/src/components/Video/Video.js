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
                        </div>

                    )}
            </div>
        )
    }
}

export default Video;