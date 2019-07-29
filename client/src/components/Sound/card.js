import React from "react";
// import "./style.css";

function Card(props) {
    const imgProps = {
        alt: props.name,
        src: props.image,
        onClick: () => props.handleClick(props.id),
    };

    return (
        <div className="row">
            <div className="col-md-4">
                <div className="card">
                    <div className="img-container" width="100px">
                        <img {...imgProps} width="100px" />
                        {/* Spread operator above does the same as the like that follows */}
                        {/* <img alt={props.name} src={props.image} onClick={() => props.handleClick(props.id)} /> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;