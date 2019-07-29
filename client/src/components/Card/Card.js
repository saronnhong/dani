import React from 'react';
import "./Card.css";

function Card({props}) {
    if(props.data.preview) {
        if(props.data.preview.enabled) {
            let image = props.data.preview.images[0].resolutions[props.data.preview.images[0].resolutions.length - 1].url;
            image = image.replace(/&amp;/g,"&");
        }
    }
    return(
        <div className="col-md-3">
        <div className="card">
            <div className="img-container">
                <img alt={props.name} src={props.image} />
            </div>
            <div className="content">
                <p>{props.title}</p>
            </div>
        </div>
    </div>
    
    )
}

export default Card;