// import React, { Component } from 'react';
import React from 'react';
import "./Subreddits.css"


function Subreddits(props) {
    return (
        <div className="col-md-4">
                <button type="button" className="btn btn-danger subButton mt-3 btn-block" onClick={props.changeSubreddit}>{props.name} <img className="buttonIcon" src={props.icon}></img></button>
        </div>
    )
}

export default Subreddits;