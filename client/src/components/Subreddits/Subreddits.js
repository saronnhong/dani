// import React, { Component } from 'react';
import React from 'react';
import "./Subreddits.css"
// class Subreddits extends Component {
//     render() {
//         return(
//             <div>
//                 <button type="button" className="btn btn-success">food</button>
//                 <button type="button" className="btn btn-success">Pixar</button>
//                 <button type="button" className="btn btn-success">funny</button>
//             </div>
//         )
//     }
// }



function Subreddits(props) {

    return(
        <div className="subButtons">
             <button type="button" className="btn btn-success" onClick={props.changeSubreddit}>{props.name}</button>
        </div>
    )
}

export default Subreddits;