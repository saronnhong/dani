import React from 'react';

import './style.css';
import panoramas from "./panoramas.json";



class Panoramas extends React.Component {

    clickedFunction() {
        console.log("I work");
    }

    render() {
        return (
            <div className="container">
                {panoramas.map(image =>

                    <div className="col-md-5">
                        <a onClick={this.clickedFunction} href={"/Panoramas/" + image.name}>
                            <img src={process.env.PUBLIC_URL + '/img/panoramaImages/' + image.path} alt="city" />
                        </a>
                    </div>
                )}
            </div>

        )
    }
}

export default Panoramas;