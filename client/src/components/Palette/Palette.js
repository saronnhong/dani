import React from 'react';
import './Palette.css';

const colors = [
   {
    color: "rgba(0,0,250,0.7)",
    id: "blue"
   },
   {
    color: "rgba(250,0,0,0.7)",
    id: "red"
   },
   {
    color: "rgba(0,250,0,0.7)",
    id: "green"
   }
]

function Palette(props) {

    // function chooseColor() {
    //     props.color
    // };

    return (
        <div className="palette-body">
            {colors.map(color => 
                <button href="# " onClick={() => this.chooseColor(color.id)} 
                key={color.id} style={{backgroundColor: colors.color}} 
                className="palette-color">{color.id}</button>
            )}
        </div>
    )
}

export default Palette;