// import React, { Component } from 'react';
import React from 'react';
import "./Subreddits.css"


function Subreddits(props) {

    return(
        <div className="subButtons">
             <button type="button" className="btn btn-success" onClick={props.changeSubreddit}>{props.name}</button>
        </div>
    )
}

export default Subreddits;