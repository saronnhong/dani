import React, { Component } from "react";
import {Link} from "react-router-dom";

// import animals from "./relaxSounds.json";
import "./style.css";

class Sounds extends Component {
    render() {
        return (
            <div className="container containerSounds">
                
                <div ClassName="row">
                    
                    <span>
                        <Link to="/animalSounds">
                        <button type="button" class="btn btn-danger menuButton">Animals</button>
                        </Link>
                        <Link to="/natureSounds">
                        <button type="button" class="btn btn-secondary menuButton natureButton">Nature</button>
                        </Link>
                        <Link to="/relaxSounds">
                        <button type="button" class="btn btn-primary menuButton relaxButton">Relax</button>
                        </Link>
                        
                    </span>
                </div>
            </div>
        )
    }
}

export default Sounds;


