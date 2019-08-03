import React, { Component } from 'react';
import CanvasDraw from "react-canvas-draw";
import ColoringPalette from "../ColoringPalette"
import './Coloring.css';
import API from "../../utils/API"
import withAuth from './../withAuth';
import coloringBook from "./coloringbook.json"

class Coloring extends Component {
    state = {
        color: "rgba(155,50,160,0.5)",
        width: 1000,
        height: 800,
        brushRadius: 5,
        lazyRadius: 1,
        coloringImage: 0,
        clickFlag: 0,
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
                if (data.data[data.data.length - 1]) {
                    this.saveableCanvas.loadSaveData(
                        data.data[data.data.length - 1].coloring
                    )
                }
            })
    }

    saveColoring = () => {
        let saveNameRandom = "test save"

        API.saveColoring(saveNameRandom, this.saveableCanvas.getSaveData())
    }

    componentWillMount = () => {
        if (localStorage.ColoringBookPage) {
            let savedPage = parseInt(localStorage.getItem("ColoringBookPage"))
            if (typeof savedPage === "number") {
                this.setState({ coloringImage: savedPage })
            }
        }
    }

    flipColoringBookLeft = () => {
        this.setState({ clickFlag: this.state.clickFlag + 1 })
        if (this.state.coloringImage === 0) {
            this.setState({ coloringImage: coloringBook.length - 1 })
            let savedPage = this.state.coloringImage
            localStorage.setItem('ColoringBookPage', savedPage)
        } else {
            this.setState({ coloringImage: this.state.coloringImage - 1 })
            let savedPage = this.state.coloringImage
            localStorage.setItem('ColoringBookPage', savedPage)
        }
        if (this.state.clickFlag >= 1) window.location.reload();
        setTimeout(() => { this.setState({ clickFlag: 0 }) }, 1000);
    }

    flipColoringBookRight = () => {
        this.setState({ clickFlag: this.state.clickFlag + 1 })
        if (this.state.coloringImage === coloringBook.length - 1) {
            this.setState({ coloringImage: 0 })
            let savedPage = this.state.coloringImage
            localStorage.setItem('ColoringBookPage', savedPage)
        } else {
            this.setState({ coloringImage: this.state.coloringImage + 1 })
            let savedPage = this.state.coloringImage
            localStorage.setItem('ColoringBookPage', savedPage)
        }
        if (this.state.clickFlag >= 1) window.location.reload();
        setTimeout(() => { this.setState({ clickFlag: 0 }) }, 1000);
    }
    
    render() {
        console.log(coloringBook[this.state.coloringImage].path)
        return (
            <div className=" text-center">
                <h2 className="pangolin-coloring-text" onClick={() => this.saveColoring()}>Save Coloring</h2>
                <h1 className="pangolin-coloring-text-title"> Let's Color!</h1>
                <h2 className="pangolin-coloring-text" onClick={() => this.loadColoring()}>Load Coloring</h2>
                <button className="undo-coloring-button pangolin-coloring-undo"
                    onClick={() => {
                        this.saveableCanvas.undo();
                    }}
                >Oops! -<i className="fa fa-eraser"></i> -Undo</button>
                <div className="d-flex draw-coloring-area">
                    <i className="fa fa-long-arrow-alt-left fa-5x arrows arr-left"
                        onClick={() => this.flipColoringBookLeft()}></i>
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
                            + coloringBook[this.state.coloringImage].path}
                    />
                    <i className="fa fa-long-arrow-alt-right fa-5x arrows arr-right"
                        onClick={() => this.flipColoringBookRight()}></i>
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


export default withAuth(Coloring);