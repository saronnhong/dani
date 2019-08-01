import React, { Component } from 'react';
import CanvasDraw from "react-canvas-draw";
import ColoringPalette from "../ColoringPalette"
import './Coloring.css';
import API from "../../utils/API"
import coloringBook from "./coloringbook.json"

class Coloring extends Component {
    state = {
        color: "rgba(155,50,160,0.5)",
        width: 1000,
        height: 800,
        brushRadius: 5,
        lazyRadius: 1,
        coloringImage: coloringBook[0].path
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

    loadColoring = () => {
        API.loadColoring()
            .then(data => {
                this.saveableCanvas.loadSaveData(
                    data.data[data.data.length - 1].coloring
                )
            })
    }

    saveColoring = () => {
        let saveNameRandom = "test save"

        API.saveColoring(saveNameRandom, this.saveableCanvas.getSaveData())
    }

    render() {
        return (
            <div className=" text-center">
                <h2 className="pangolin-text" onClick={() => this.saveColoring()}>Save Coloring</h2>
                <h1 className="pangolin-text-title"> Let's Color!</h1>
                <h2 className="pangolin-text" onClick={() => this.loadColoring()}>Load Coloring</h2>
                <button className="undo-button pangolin-undo"
                    onClick={() => {
                        this.saveableCanvas.undo();
                    }}
                >Oops! -<i className="fa fa-eraser"></i> -Undo</button>
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
                        imgSrc={"https://raw.githubusercontent.com/RhadMax/ColoringBookHoster/master/ColoringBook/"
                            + this.state.coloringImage}
                    />
                    <ColoringPalette
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


export default Coloring;