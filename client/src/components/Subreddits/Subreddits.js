// import React, { Component } from 'react';
import React from 'react';
import "./Subreddits.css"


function Subreddits(props) {
    return (
        <div className="col-md-4">
            <div class="subButtons">
                <button type="button" className="btn btn-success" onClick={props.changeSubreddit}>{props.name}</button>
            </div>
        </div>
    )
}

export default Subreddits;