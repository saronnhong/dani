import React from 'react';
import './ColoringPalette.css';

const colors = [
    {
        color: "rgba(55,115,255,0.5)",
        id: "blue"
    },
    {
        color: "rgba(225,0,0,0.5)",
        id: "red"
    },
    {
        color: "rgba(0,175,0,0.5)",
        id: "green"
    },
    {
        color: "rgba(255,225,15,0.5)",
        id: "yellow"
    },
    {
        color: "rgba(255,155,0,0.5)",
        id: "orange"
    },
    {
        color: "rgba(125,0,225,0.5)",
        id: "purple"
    },
    {
        color: "rgba(225,125,225,0.5)",
        id: "pink"
    },
    {
        color: "rgba(0,0,0,0.5)",
        id: "black"
    },
    {
        color: "rgba(255,255,255,0.5)",
        id: "white"
    }
]

function ColoringPalette(props) {



    return (
        <div className="palette-color-body">
            {colors.map(color =>
                <button onClick={() => props.colorClick(color.color)}
                    key={color.id} style={{ backgroundColor: color.color }}
                    className="palette-color-color">
                    <div className="palette-color-color-selected" >{color.id}</div>
                </button>
            )}
            <button onClick={props.brushSizeUp} className="palette-size-up"><i className="fa fa-plus-square fa-3x"></i></button>
            <div><i className="fa fa-paint-brush fa-2x"></i></div>
            <button onClick={props.brushSizeDown} className="palette-size-down"><i className="fa fa-minus-square fa-3x"></i></button>
        </div>
    )
}

export default ColoringPalette;