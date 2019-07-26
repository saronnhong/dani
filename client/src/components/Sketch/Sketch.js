import React, { Component } from 'react';
import CanvasDraw from "react-canvas-draw";
import Palette from "../Palette"

class Sketch extends Component {
    state = {
        color: "rgba(155,50,160,0.7)",
        width: 1000,
        height: 800,
        brushRadius: 10,
        lazyRadius: 1
    }
    // method() this.setstate({color: bladsjfas})

    // asdfkdasf button: onClick= METHODS()
    render() {
        return (
            <div className=" text-center container">
                <h1> Let's Draw!</h1>
                <div className="row">
                    <CanvasDraw
                        brushColor={this.state.color}
                        canvasHeight={this.state.height}
                        canvasWidth={this.state.width}
                    />
                    <Palette />
                </div>
            </div>
        )
    }
}


export default Sketch;