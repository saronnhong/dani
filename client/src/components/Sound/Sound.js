import React, { Component } from "react";
import animals from "./animalSounds.json";
// import ReactPlayer from 'react-player';

//HTML audio elements
var audio0 = new Audio(animals[0].sound);
var audio1 = new Audio(animals[1].sound);
var audio2 = new Audio(animals[2].sound);
var audio3 = new Audio(animals[3].sound);
var audio4 = new Audio(animals[4].sound);
var audio5 = new Audio(animals[5].sound);
var audio6 = new Audio(animals[6].sound);
var audio7 = new Audio(animals[7].sound);
var audio8 = new Audio(animals[8].sound);
var audio9 = new Audio(animals[9].sound);
var audio10 = new Audio(animals[10].sound);
var audio11 = new Audio(animals[11].sound);


class Sound extends Component {
    render() {
        // var audio = new Audio(animals[0].sound)
        return (
            <div>
                <a onClick={() => audio0.play()}>
                    <img width="200px" src={animals[0].image} />
                </a>
                <a onClick={() => audio1.play()}>
                    <img width="200px" src={animals[1].image} />
                </a>
                <a onClick={() => audio2.play()}>
                    <img width="200px" src={animals[2].image} />
                </a>
                <a onClick={() => audio3.play()}>
                    <img width="200px" src={animals[3].image} />
                </a>
                <a onClick={() => audio4.play()}>
                    <img width="200px" src={animals[4].image} />
                </a>
                <a onClick={() => audio5.play()}>
                    <img width="200px" src={animals[5].image} />
                </a>
                <a onClick={() => audio6.play()}>
                    <img width="200px" src={animals[6].image} />
                </a>
                <a onClick={() => audio7.play()}>
                    <img width="200px" src={animals[7].image} />
                </a>
                <a onClick={() => audio8.play()}>
                    <img width="200px" src={animals[8].image} />
                </a>
                <a onClick={() => audio9.play()}>
                    <img width="200px" src={animals[9].image} />
                </a>
                <a onClick={() => audio10.play()}>
                    <img width="200px" src={animals[10].image} />
                </a>
                <a onClick={() => audio11.play()}>
                    <img width="200px" src={animals[11].image} />
                </a>    
            </div>
        )
    }
}

// class Sound extends Component {
//     state = {
//         playing: false

//     }

//     playSound = () => {
//         this.setState({ playing: true })
//         console.log(animals);
//     }

//     onEnded = () => {
//         this.setState({ playing: false })
//     }



//     render() {
//         var audio = new Audio("./chicken.mp3");
//         return (

//             <div>

//                 <a onClick={this.playSound}>{this.state.playing && <ReactPlayer url={process.env.PUBLIC_URL + "/sounds/animal-sounds/moo.wav"} playing onEnded={this.onEnded} />}
//                     <img src={process.env.PUBLIC_URL + "/sounds/animal-images/cow.png"} />
//                 </a>

//                 <a onClick= {audio.play()} >
//                     hello
//                 </a>

//                 {/* <a onClick={this.playSound}>
//                     {this.state.playing && <ReactPlayer url={animals[0].sound} playing onEnded={this.onEnded} />}
//                     <img width="200px" src={animals[0].image} />
//                 </a>

//                 <a onClick={this.playSound}>
//                     {this.state.playing && <ReactPlayer url={animals[1].sound} playing onEnded={this.onEnded} />}
//                     <img width="200px" src={animals[1].image} />
//                 </a> */}


//                 {/* <a onClick={this.playSound}>{this.state.playing && <ReactPlayer url={process.env.PUBLIC_URL + "/sounds/animal-sounds/koze.wav"} playing onEnded={this.onEnded} />}
//                     <img src={process.env.PUBLIC_URL + "/sounds/animal-images/goat.jpg"} />
//                 </a>

//                 <a onClick={this.playSound}>{this.state.playing && <ReactPlayer url={process.env.PUBLIC_URL + "/sounds/animal-sounds/chicken.mp3"} playing onEnded={this.onEnded} />}
//                     <img src={process.env.PUBLIC_URL + "/sounds/animal-images/chicken.jfif"} />
//                 </a> */}

//             </div>
//         )
//     }
// }

export default Sound;


// // import React, { Component } from "react";

// // import ReactPlayer from 'react-player';

// // import animals from "./animalSounds.json";
// // import Card from "./card"



// // class Sound extends Component {
// //     state = {
// //         playing: false,
// //         animals
// //     }

// //     componentDidMount() {
// //         this.setState({ animals: this.shuffleAnimalPictures(this.state.animals) });
// //     }

// //     shuffleAnimalPictures = animals => {
// //         let i = animals.length - 1;

// //         while (i > 0) {
// //             const j = Math.floor(Math.random() * (i + 1));
// //             // swapping places of animals
// //             const temp = animals[i];
// //             animals[i] = animals[j];
// //             animals[j] = temp;
// //             i--;
// //         }
// //         return animals;
// //     }

// //     handleItemClick = id => {
// //         let clicked = false;
// //         const newData = this.state.animals.map((item) => {
// //             const newItem = { ...item };
// //             console.log(newItem);

// //             // console.log("newItem: " + JSON.stringify(newItem));
// //             if (newItem[0].id === id) {
// //                 newItem.clicked = true;
// //             }
// //             return newItem;
// //         });
// //         if (clicked) { this.playSound(newData) };
// //     }


// //     playSound = () => {
// //         this.setState({ playing: true });
// //     }

// //     onEnded = () => {
// //         this.setState({ playing: false })
// //     }


// //     render() {
// //         return (

// //             <div className="container">
// //                 {this.state.animals.map((animal) => (
// //                     <Card handleClick={this.handleItemClick}
// //                         image={animal.image}
// //                         id={animal.id}
// //                         sound={animal.sound}
// //                         // ADD ID ALSO AS THE KEY TO REMOVE A WARNING: "Each child in a list should have a unique "key" prop.
// //                         key={animal.id}
// //                     />
// //                 ),
// //                     (<ReactPlayer url={process.env.PUBLIC_URL + "/sounds/animal-sounds/moo.wav"} playing onEnded={this.onEnded} />)
// //                 )
// //                 }
// //             </div>



// //             // <div>
// //             // <a href="#" onClick={this.playSound}>{this.state.playing && <ReactPlayer url={process.env.PUBLIC_URL + "/sounds/animal-sounds/moo.wav"} playing onEnded={this.onEnded} }
// //             //     <img src={process.env.PUBLIC_URL + "/sounds/animal-images/cow.png"} />
// //             // </a>

// //                 // <a onClick={this.playSound}>{this.state.playing && <ReactPlayer url={process.env.PUBLIC_URL + "/sounds/animal-sounds/koze.wav"} playing onEnded={this.onEnded} />}
// //                 //     <img src={process.env.PUBLIC_URL + "/sounds/animal-images/goat.jpg"} />
// //                 // </a>

// //             //     <a onClick={this.playSound}>{this.state.playing && <ReactPlayer url={process.env.PUBLIC_URL + "/sounds/animal-sounds/chicken.mp3"} playing onEnded={this.onEnded} />}
// //             //         <img src={process.env.PUBLIC_URL + "/sounds/animal-images/chicken.jfif"} />
// //             //     </a>

// //             //     <a onClick={this.playSound}>{this.state.playing && <ReactPlayer url={process.env.PUBLIC_URL + "/sounds/animal-sounds/sheep.wav"} playing onEnded={this.onEnded} />}
// //             //         <img src={process.env.PUBLIC_URL + "/sounds/animal-images/sheep.png"} />
// //             //     </a>

// //             // </div>
// //         )
// //     }
// // }


// // export default Sound;