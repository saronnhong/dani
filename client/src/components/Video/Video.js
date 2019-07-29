import React, { Component } from "react";

import ReactPlayer from 'react-player'
import videos from "./videos.json";

class Video extends Component {
    //TO DO: ADD STATE TO SET PLAYING DEFAULT TO FALSE
    render() {
        return (
            <div className="wrapper">
                
                {videos.map((video) =>
                //TO DO: DISPLAY VIDEO NAMES FROM ARRAY
                    <ReactPlayer url={video.video} playing />
                    
                )}
            </div>


        )
    }
}

export default Video;