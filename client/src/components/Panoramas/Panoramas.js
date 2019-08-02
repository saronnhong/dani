import React from 'react';
import { Link } from 'react-router-dom'
import './style.css';
import panoramas from "./panoramas.json";



class Panoramas extends React.Component {

    clickedFunction() {
        console.log("I work");
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                {panoramas.map(image =>

                    <div className="col-md-4">
                        <Link  to={"/Panoramas/" + image.name.toLowerCase() }>
                            <img className="img-fluid" src={process.env.PUBLIC_URL + '/img/panoramaImages/' + image.path} alt="city" />
                        </Link>

                    </div>
                )}
                </div>
            </div>

        )
    }
}

export default Panoramas;