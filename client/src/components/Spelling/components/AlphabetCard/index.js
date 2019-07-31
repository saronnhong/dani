import React from "react";
// import "./style.css";

function AlphabetCard(props) {
    return (
        <div className="scrabbleChar" >
            <img className="scrabbleChar_img" src={props.image} onClick={props.value} width="40px" alt="alphaLetter"  />
        </div>
    );
}

export default AlphabetCard;