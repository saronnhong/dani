import React, { Component } from "react";
// import "./style.css";
// import Alphabet from "../../alphabet.json";
import Spelling from "../../Spelling";

var wordContainer = [];
class AlphabetCard extends Component {
    render() {
        return (
            <div className="scrabbleChar" >
                <img className="scrabbleChar_img" src={this.props.image} onClick={() => {
                    wordContainer.push(this.props.value);
                    Spelling.writeToAnswer();
                    
                    
                }

                } width="40px" alt="alphaLetter" />
            </div>
        )
    }


}

export default AlphabetCard;