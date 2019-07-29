import React, { Component } from 'react';
import CanvasDraw from "react-canvas-draw";
import Palette from "../Palette"

class Sketch extends Component {
    state = {
        color: "rgba(155,50,160,0.7)",
        width: 1000,
        height: 800,
        brushRadius: 5,
        lazyRadius: 1,
        imgSrc: ""

    }
    
    chooseColor = color => {
        this.setState({ color: color})
    };

    brushSizeUp = () => {
        if(this.state.brushRadius < 20) {
            this.setState({ brushRadius: this.state.brushRadius + 1})
        }
    }
    brushSizeDown = () => {
        if(this.state.brushRadius > 1) {
            this.setState({ brushRadius: this.state.brushRadius - 1})
        }
    }
   
    render() {
        return (
            <div className=" text-center container">
                <h1> Let's Draw!</h1>
                <div className="row">
                    <CanvasDraw
                        brushColor={this.state.color}
                        canvasHeight={this.state.height}
                        canvasWidth={this.state.width}
                        lazyRadius={this.state.lazyRadius}
                        brushRadius={this.state.brushRadius}
                    />
                    <Palette 
                    colorClick={this.chooseColor} 
                    brushSizeUp={this.brushSizeUp}
                    brushSizeDown={this.brushSizeDown}
                    />
                </div>
            </div>
        )
    }
}


export default Sketch;