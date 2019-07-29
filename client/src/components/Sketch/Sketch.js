import React, { Component } from 'react';
import CanvasDraw from "react-canvas-draw";
import Palette from "../Palette"
import './Sketch.css';

class Sketch extends Component {
    state = {
        color: "rgba(155,50,160,0.7)",
        width: 1000,
        height: 800,
        brushRadius: 5,
        lazyRadius: 1,
    }

    chooseColor = color => {
        this.setState({ color: color })
    };

    brushSizeUp = () => {
        if (this.state.brushRadius < 20) {
            this.setState({ brushRadius: this.state.brushRadius + 1 })
        }
    }
    brushSizeDown = () => {
        if (this.state.brushRadius > 1) {
            this.setState({ brushRadius: this.state.brushRadius - 1 })
        }
    }

    loadDrawing = () => {
        for (let i = 0; i < localStorage.length; i++){
            console.log(localStorage)
            // do something with localStorage.getItem(localStorage.key(i));
        }
        this.saveableCanvas.loadSaveData(
            localStorage.getItem("savedDrawing")
        );

    }

    saveDrawing = () => {
        let saveNameRandom = toString(Math.random(100))
        console.log(saveNameRandom + "dEBUGGGING")
        localStorage.setItem(
            saveNameRandom,
            this.saveableCanvas.getSaveData()
        );

    }

    render() {
        return (
            <div className=" text-center">
                <button onClick={() => this.saveDrawing()}>Save Drawing</button>
                <h1 className="d-inline-flex"> Let's Draw!</h1>
                <button onClick={() => this.loadDrawing()}>Load a Drawing</button>
                <button className="undo-button"
                    onClick={() => {
                        this.saveableCanvas.undo();
                    }}
                >Oops! <i class="fa fa-eraser"></i></button>
                <div className="d-flex draw-area">
                    <CanvasDraw
                        hideGrid
                        ref={canvasDraw => (this.saveableCanvas = canvasDraw)}
                        // ref1={canvasDraw => (this.loadableCanvas = canvasDraw)}
                        saveData={""}
                        brushColor={this.state.color}
                        canvasHeight={this.state.height}
                        canvasWidth={(window.outerWidth - 135) || this.state.width}
                        lazyRadius={this.state.lazyRadius}
                        brushRadius={this.state.brushRadius}
                    />
                    <Palette
                        undo={this.undoButton}
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