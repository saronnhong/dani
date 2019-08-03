import React, { Component } from 'react';
import CanvasDraw from "react-canvas-draw";
import Palette from "../Palette"
import './Sketch.css';
import API from "../../utils/API"
import withAuth from './../withAuth';

class Sketch extends Component {
    state = {
        color: "rgba(155,50,160,0.7)",
        width: 1000,
        height: 800,
        brushRadius: 5,
        lazyRadius: 1,
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

    componentWillMount() {
        if (window.innerHeight < 800) {
            this.setState({height: window.innerHeight - 142})
        }
        if (window.innerWidth < 1200 && window.innerWidth > 600) {
            this.setState({width: window.innerWidth -100})
        }
        if (window.innerWidth < 600) {
            this.setState({width: window.innerWidth -75})
        }
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
        API.loadDrawing()
            .then(data => {
                if (data.data[data.data.length - 1]) {
                this.saveableCanvas.loadSaveData(
                    data.data[data.data.length-1].drawing
                )
                }
            })
    }

    saveDrawing = () => {
        let saveNameRandom = "test save"
        API.saveDrawing(saveNameRandom, this.saveableCanvas.getSaveData())
    }

    render() {
        return (
            <div className=" text-center">
                <h2 className="pangolin-text" onClick={() => this.saveDrawing()}>Save Drawing</h2>
                <h1 className="pangolin-text-title"> Let's Draw!</h1>
                <h2 className="pangolin-text load-text" onClick={() => this.loadDrawing()}>Load a Drawing</h2>
                <button className="undo-button pangolin-undo"
                    onClick={() => {
                        this.saveableCanvas.undo();
                    }}
                >Oops! -<i className="fa fa-eraser"></i>- Undo</button>
                <div className="d-flex draw-area">
                    <CanvasDraw
                        hideGrid
                        ref={canvasDraw => (this.saveableCanvas = canvasDraw)}
                        saveData={""}
                        brushColor={this.state.color}
                        canvasHeight={ this.state.height
                        }
                        canvasWidth={this.state.width}
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


export default withAuth(Sketch);