import React, { Component } from "react";
// import {Link} from "react-router-dom";
import AlphabetCard from "./components/AlphabetCard";

import Words from "./wordList.json";
import Alphabet from "./alphabet.json";
import "./style.css";
import { createBrotliCompress } from "zlib";

var wordGuessedArr = [];
var wordGuess;
class Spelling extends Component {
    state = {
        choosenWord: null,
        choosenImage: null,
        answerKeys: null,
        imgLocation: [{ "image": null, "value": null }],
        answer: ""

    }
    componentWillMount() {
        this.updateWord()
        
        




    }
    updateWord = () => {
        let randomWord = Math.floor((Math.random() * Words.length));
        this.setState({ choosenWord: Words[randomWord].word, choosenImage: Words[randomWord].image, answerKeys: Words[randomWord].answerKeys });
        
    }

    spellTheWord = (value) => {
        var answer;
        answer.push(value);
        console.log(answer)
    }

    updateAnswer = (value) => {
        this.setState({ answer: value });
    }


    imageToLetter = () => {
        // this.setState({letters: Words[1].letters});
        var stringLetters = this.state.answerKeys;
        var arrayLetters = stringLetters.split('');

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
                case "i":
                    imgLocation[i] = { "image": "/img/I.png", "value": "i" };
                    break;
                case "j":
                    imgLocation[i] = { "image": "/img/J.png", "value": "j" };
                    break;
                case "k":
                    imgLocation[i] = { "image": "/img/K.png", "value": "k" };
                    break;
                case "l":
                    imgLocation[i] = { "image": "/img/L.png", "value": "l" };
                    break;
                case "m":
                    imgLocation[i] = { "image": "/img/M.png", "value": "m" };
                    break;
                case "n":
                    imgLocation[i] = { "image": "/img/N.png", "value": "n" };
                    break;
                case "o":
                    imgLocation[i] = { "image": "/img/O.png", "value": "o" };
                    break;
                case "p":
                    imgLocation[i] = { "image": "/img/P.png", "value": "p" };
                    break;
                case "q":
                    imgLocation[i] = { "image": "/img/Q.png", "value": "q" };
                    break;
                case "r":
                    imgLocation[i] = { "image": "/img/R.png", "value": "r" };
                    break;
                case "s":
                    imgLocation[i] = { "image": "/img/S.png", "value": "s" };
                    break;
                case "t":
                    imgLocation[i] = { "image": "/img/T.png", "value": "t" };
                    break;
                case "u":
                    imgLocation[i] = { "image": "/img/U.png", "value": "u" };
                    break;
                case "v":
                    imgLocation[i] = { "image": "/img/V.png", "value": "v" };
                    break;
                case "w":
                    imgLocation[i] = { "image": "/img/W.png", "value": "w" };
                    break;
                case "x":
                    imgLocation[i] = { "image": "/img/X.png", "value": "x" };
                    break;
                case "y":
                    imgLocation[i] = { "image": "/img/Y.png", "value": "y" };
                    break;
                case "z":
                    imgLocation[i] = { "image": "/img/Z.png", "value": "z" };
                    break;

                default:
                    console.log("no match")
            }
        }
        this.setState({ imgLocation: imgLocation });
        
    }

    render() {


        return (
            <div className="container spellContainer">

                <div className="row">
                    <img className="spellImg" width="200px" alt="imagePic" src={this.state.choosenImage} />
                    <h1>{this.state.answer}</h1>
                </div>

                <div className="row">
                    {this.state.imgLocation.map((letter) =>
                        // <AlphabetCard image={letter.image} value={letter.value} />
                        <div className="scrabbleChar" >
                            <img className="scrabbleCharImg" src={letter.image} onClick={() => {
                                wordGuessedArr.push(letter.value);
                                wordGuess = wordGuessedArr.join('');
                                this.updateAnswer(wordGuess);
                                console.log(this.state.word);
                            }
                            } width="40px" />
                        </div>
                    )}
                </div>
                {/* <button onClick={() => this.imageToLetter()} >butt</button> */}
                <button type="button" class="btn btn-success spellButton" onClick={() => {
                    if (wordGuess === this.state.choosenWord) {
                        alert("You are correct")
                    }
                }}>Submit</button> 
                <button type="button" class="btn btn-success spellButton" onClick={() => {
                    this.imageToLetter();
                    console.log(this.state);
                }
                }>Load</button> 
                <button type="button" class="btn btn-success spellButton" onClick={() => {
                    wordGuessedArr.length=0;
                    this.setState({answer: ""});

                    
                }
                }>Clear</button>

            </div>
        )
    }
}

export default Spelling;


