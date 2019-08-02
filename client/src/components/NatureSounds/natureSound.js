import React, { Component } from "react";

import natures from "./natureSounds.json";
import "./style.css";
import Player from "../Player";

class NatureSounds extends Component {
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
            </div>
        )
    }
}

export default NatureSounds;


