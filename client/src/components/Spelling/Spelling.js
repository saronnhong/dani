import React, { Component } from "react";
// import {Link} from "react-router-dom";
// import AlphabetCard from "./components/AlphabetCard";

import Words from "./wordList.json";
import Alphabet from "./alphabet.json";
import "./style.css";

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
        this.updateWord();
    }

    // componentDidMount() {
    //     this.imageToLetter();
    // }

    // componentDidUpdate() {
    //     this.imageToLetter();
    // }
    updateWord = () => {
        let randomNum = Math.floor((Math.random() * Words.length));
        this.setState({ choosenWord: Words[randomNum].word, choosenImage: Words[randomNum].image, answerKeys: Words[randomNum].answerKeys }, () => {
            this.imageToLetter()
        });
    }

    updateAnswer = (value) => {
        this.setState({ answer: value });
    }

    imageToLetter = () => {
        var stringLetters = this.state.answerKeys;
        var arrayLetters = stringLetters.split('');

        const imgLocation = [];
        imgLocation.length = 0;

        for (var i = 0; i < arrayLetters.length; i++) {
            switch (arrayLetters[i]) {
                case "a":
                    imgLocation[i] = { "image": Alphabet[0].image, "value": Alphabet[0].letter };
                    break;
                case "b":
                    imgLocation[i] = { "image": Alphabet[1].image, "value": Alphabet[1].letter };
                    break;
                case "c":
                    imgLocation[i] = { "image": Alphabet[2].image, "value": Alphabet[2].letter };
                    break;
                case "d":
                    imgLocation[i] = { "image": Alphabet[3].image, "value": Alphabet[3].letter };
                    break;
                case "e":
                    imgLocation[i] = { "image": Alphabet[4].image, "value": Alphabet[4].letter };
                    break;
                case "f":
                    imgLocation[i] = { "image": Alphabet[5].image, "value": Alphabet[5].letter };
                    break;
                case "g":
                    imgLocation[i] = { "image": Alphabet[6].image, "value": Alphabet[6].letter };
                    break;
                case "h":
                    imgLocation[i] = { "image": Alphabet[7].image, "value": Alphabet[7].letter };
                    break;
                case "i":
                    imgLocation[i] = { "image": Alphabet[8].image, "value": Alphabet[8].letter };
                    break;
                case "j":
                    imgLocation[i] = { "image": Alphabet[9].image, "value": Alphabet[9].letter };
                    break;
                case "k":
                    imgLocation[i] = { "image": Alphabet[10].image, "value": Alphabet[10].letter };
                    break;
                case "l":
                    imgLocation[i] = { "image": Alphabet[11].image, "value": Alphabet[11].letter };
                    break;
                case "m":
                    imgLocation[i] = { "image": Alphabet[12].image, "value": Alphabet[12].letter };
                    break;
                case "n":
                    imgLocation[i] = { "image": Alphabet[13].image, "value": Alphabet[13].letter };
                    break;
                case "o":
                    imgLocation[i] = { "image": Alphabet[14].image, "value": Alphabet[14].letter };
                    break;
                case "p":
                    imgLocation[i] = { "image": Alphabet[15].image, "value": Alphabet[15].letter };
                    break;
                case "q":
                    imgLocation[i] = { "image": Alphabet[16].image, "value": Alphabet[16].letter };
                    break;
                case "r":
                    imgLocation[i] = { "image": Alphabet[17].image, "value": Alphabet[17].letter };
                    break;
                case "s":
                    imgLocation[i] = { "image": Alphabet[18].image, "value": Alphabet[18].letter };
                    break;
                case "t":
                    imgLocation[i] = { "image": Alphabet[19].image, "value": Alphabet[19].letter };
                    break;
                case "u":
                    imgLocation[i] = { "image": Alphabet[20].image, "value": Alphabet[20].letter };
                    break;
                case "v":
                    imgLocation[i] = { "image": Alphabet[21].image, "value": Alphabet[21].letter };
                    break;
                case "w":
                    imgLocation[i] = { "image": Alphabet[22].image, "value": Alphabet[22].letter };
                    break;
                case "x":
                    imgLocation[i] = { "image": Alphabet[23].image, "value": Alphabet[23].letter };
                    break;
                case "y":
                    imgLocation[i] = { "image": Alphabet[24].image, "value": Alphabet[24].letter };
                    break;
                case "z":
                    imgLocation[i] = { "image": Alphabet[25].image, "value": Alphabet[25].letter };
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
                    <div className="imgContainer" onClick={() => {
                        if (wordGuess === this.state.choosenWord) {
                            wordGuessedArr.length = 0;
                            this.updateWord();
                            alert("You are correct");
                            this.setState({ answer: "" });
                        } else {
                            alert("try again");
                            wordGuessedArr.length = 0;
                            this.setState({ answer: "" });
                        }
                    }}>
                        <img className="spellImg" width="200px" alt="imagePic" src={this.state.choosenImage} />
                    </div>

                    <h1 className="guessKey">{this.state.answer}</h1>
                </div>

                <div className="row">
                    {this.state.imgLocation.map((letter) =>
                        <div className="scrabbleChar" >
                            <img alt="scrabbleLetter" className="scrabbleCharImg" src={letter.image} onClick={() => {
                                wordGuessedArr.push(letter.value);
                                wordGuess = wordGuessedArr.join('');
                                this.updateAnswer(wordGuess);
                            }
                            } width="40px" />
                        </div>
                    )}
                </div>

                {/* <button type="button" class="btn btn-success spellButton" onClick={() => {
                    if (wordGuess === this.state.choosenWord) {
                        wordGuessedArr.length = 0;
                        this.updateWord();
                        alert("You are correct");
                        this.setState({ answer: "" });
                    } else {
                        alert("try again");
                    }
                }}>Submit</button> */}

                {/* <button type="button" class="btn btn-success spellButton" onClick={() => {
                    wordGuessedArr.length = 0;
                    this.setState({ answer: "" });
                }
                }>Clear</button> */}
            </div>
        )
    }
}

export default Spelling;


