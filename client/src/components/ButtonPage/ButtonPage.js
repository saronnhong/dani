import React from "react";
import {Link} from "react-router-dom";

import "./style.css";

function ButtonPage(props) {

    console.log(window.location);
        return (
            
            <div className="container containerSounds">
                
                <div className="row">
                    
                    <span>
                        <Link to={props.linkOne}>
                        <button type="button" className="btn btn-danger menuButton animalButton">{props.buttonOne}</button>
                        </Link>
                        <Link to={props.linkTwo}>
                        <button type="button" className="btn btn-secondary menuButton natureButton">{props.buttonTwo}</button>
                        </Link>
                        <Link to={props.linkThree}>
                        <button type="button" className="btn btn-primary menuButton relaxButton">{props.buttonThree}</button>
                        </Link>
                        
                    </span>
                </div>
            </div>
        )
    
}

export default ButtonPage;


