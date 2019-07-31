import React, { Component } from "react";
// import {Link} from "react-router-dom";
import AlphabetCard from "./components/AlphabetCard";

import Words from "./wordList.json";
import Alphabet from "./alphabet.json";
import "./style.css";

class Spelling extends Component {
    state = {
        score: 0,
        highScore: 0,
        word: null,
        letters: 0,
        imgLocation: [{ "image": "0", "value": "0" }]
    }
    updateWord = () => {
        this.setState({ word: Words[1].word });
    }
    
    spellTheWord = (value) => {
        var answer;
        answer.push(value);
        console.log(answer)
    }


    imageToLetter = () => {
        // this.setState({letters: Words[1].letters});
        var stringLetters = Words[0].letters
        var arrayLetters = stringLetters.split('')

        var imgLocation = [];
        for (var i = 0; i < arrayLetters.length; i++) {
            switch (arrayLetters[i]) {
                case "a":
                    imgLocation[i] = { "image": "/img/A.png", "value": "a" };
                    break;
                case "b":
                    imgLocation[i] = { "image": "/img/B.png", "value": "b" };
                    break;
                case "c":
                    imgLocation[i] = { "image": "/img/C.png", "value": "c" };
                    break;
                case "d":
                    imgLocation[i] = { "image": "/img/D.png", "value": "d" };
                    break;
                case "e":
                    imgLocation[i] = { "image": "/img/E.png", "value": "e" };
                    break;
                case "f":
                    imgLocation[i] = { "image": "/img/F.png", "value": "f" };
                    break;
                case "g":
                    imgLocation[i] = { "image": "/img/G.png", "value": "g" };
                    break;
                case "h":
                    imgLocation[i] = { "image": "/img/H.png", "value": "h" };
                    break;

                default:
                    console.log("no match")
            }
        }
        this.setState({ imgLocation: imgLocation });
        console.log(imgLocation);
    }

    render() {

        return (
            <div className="container">
                {/* <h1>The Word is: {this.state.word}</h1>
                <h2>The letters are: {this.state.letters}</h2> */}

                <div className="row">
                    <img width="200px" alt="wordImage" src={Words[0].image} />
                </div>
                <div className="row">
                    {this.state.imgLocation.map((scrabble) =>
                        <AlphabetCard image={scrabble.image} value={scrabble.value} />
                    )}

                </div>
                <button onClick={() => this.imageToLetter()} >butt</button>

            </div>
        )
    }
}

export default Spelling;


