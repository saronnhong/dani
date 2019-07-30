import React, { Component } from "react";

import ReactPlayer from 'react-player'
import videos from "./videos.json";

class Video extends Component {
    state = {
        playing: false
    }

    render() {
        return (
            <div>
                {/* turnery */}
                {this.state.playing ? (


                    <div className="wrapper">
                        {videos.map((video) =>
                            //TO DO: DISPLAY VIDEO NAMES FROM ARRAY
                            <ReactPlayer onClick={() =>
                                this.setState({ playing: false })
                            }
                                url={video.video} playing />

                        )}
                    </div>) : (
                        <div className="wrapper">
                            {videos.map((video) =>
                                //TO DO: DISPLAY VIDEO NAMES FROM ARRAY
                                <ReactPlayer onClick={() =>
                                    this.setState({ playing: true })
                                }
                                    url={video.video} />

                            )}
                        </div>

                )}


            </div>



        )
    }
}

export default Video;