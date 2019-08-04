import React, { Component } from 'react';
import "../App.css";
import gif from "../ezgif-2-63d192f49c60.gif"


class About extends Component {
    render() {
        return (
            <div className="containerAbout">
                <h1 className="aboutTitle">~About DANI~</h1>
                <img alt="daniel" src={gif} className="danielGif"></img>
                <p className="gifDescription">Rebecca's brother Daniel scrolling through Pinterest on her phone while waiting for food at a restaurant.</p>
                <div className="aboutContent">
                    <p className="aboutParagraph">Develop and Nurture Interface (DANI) was originally the brainchild of Rebecca Schleimer who was inspired by her older autistic brother, Daniel. Each time she would go out to eat with him, his impatience was soothed by scrolling through Pinterest on her phone. Max Patten, Saron Nhong, Marina Delkova-Moro and Rebecca collaborated to create an app to provide kids with autism a source of entertainment and learning. The goal of the app is to improve the lives of children with autism as well as their families. </p>
                </div>
            </div>
        )
    }
}

export default About;