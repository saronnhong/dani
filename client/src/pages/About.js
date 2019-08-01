import React, { Component } from 'react';
import "../App.css";
import gif from "../ezgif-2-63d192f49c60.gif"


class About extends Component {
    render() {
        return (
            <div className="containerAbout">
                <h1 className="aboutTitle">~About DANI~</h1>
                <img alt="daniel" src={gif} className="danielGif"></img>
                <p className="gifDescription">Rebecca's brother Daniel scrolling through pinterest on her phone while waiting for food at a restaurant.</p>
                <div className="aboutContent">
                    <p className="aboutParagraph">Develop and Nurture Interface (DANI) was originally the brainchild of Rebecca Schleimer who was inspired by her older autistic brother Daniel. Each time she would go out to eat with him, his impatience was soothed by scrolling through Pinterest on her phone. She collaborated with Max patten, Saron Nhong, and Marina Delkova-Moro to create an app to provide kids with autism a source of entertainment and learning, whether it be through painting, streams of fun images, spelling games, or relaxing nature and animal sounds. The primary goal of the app above all is to improve the lives of not only children with autism, but also the lives of their families as well. </p>
                </div>
            </div>
        )
    }
}

export default About;