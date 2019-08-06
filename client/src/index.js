import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';

import registerServiceWorker from './registerServiceWorker';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import axios from "axios";

// Our Components
import Login from './pages/Login';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import About from './pages/About';
import Navbar from './components/Navbar';
import Sketch from './components/Sketch';
import Reddit from './components/Reddit';
import AnimalSound from './components/AnimalSounds';
import NatureSound from './components/NatureSounds';
import RelaxSound from './components/RelaxSounds';
import Video from './components/Video';
import ButtonPage from './components/ButtonPage';
import Coloring from './components/Coloring';
import Panoramas from './components/Panoramas';
import DisplayPanorama from './components/DisplayPanorama';
import Landing from './components/Landing';


import Spelling from './components/Spelling';
// Here is if we have an id_token in localStorage
if (localStorage.getItem("id_token")) {
    // then we will attach it to the headers of each request from react application via axios
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('id_token')}`;
}

ReactDOM.render(
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route component={Navbar} />
            </Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/about" component={About} />
            <Route exact path="/Profile" component={Profile} />
            <Route exact path="/Drawing" component={Sketch} />
            <Route exact path="/Images" component={Reddit} />
            <Route exact path="/Animal-Sounds" component={AnimalSound} />
            <Route exact path="/Nature-Sounds" component={NatureSound} />
            <Route exact path="/Relaxing-Sounds" component={RelaxSound} />
            <Route exact path="/Videos" component={Video} />
            <Route exact path="/Spelling" component={Spelling} />
            <Route exact path="/Coloring" component={Coloring} />
            <Route exact path="/Images-360" component={Panoramas} />
            <Route path="/Panoramas/:image" component={DisplayPanorama} />

            <Route exact path="/Home"
                render={(props) => <ButtonPage {...props}
                    linkOne="/Look"
                    linkTwo="/Listen"
                    linkThree="/Learn"
                    buttonOne={<div> <i className="fas fa-eye fa-5x"></i> <p className="font-buttons-text">Look</p> </div> }
                    buttonTwo={<div> <i className="fas fa-headphones-alt fa-5x"></i> <p className="font-buttons-text">Listen</p> </div> }
                    buttonThree={<div> <i className="fab fa-leanpub fa-5x"></i> <p className="font-buttons-text">Learn</p> </div> }
                />}
            />
            <Route exact path="/Look"
                render={(props) => <ButtonPage {...props}
                    linkOne="/Images"
                    linkTwo="/Videos"
                    linkThree="/Images-360"
                    buttonOne={<div> <i className="fas fa-camera fa-5x"></i> <p className="font-buttons-text">Images</p> </div> }
                    buttonTwo={<div> <i className="fas fa-video fa-5x"></i> <p className="font-buttons-text">Videos</p> </div> }
                    buttonThree={<div> <i className="fas fa-expand-arrows-alt fa-5x"></i> <p className="font-buttons-text">360</p> </div> }
                />}
            />
            <Route exact path="/Listen"
                render={(props) => <ButtonPage {...props}
                    linkOne="/Animal-Sounds"
                    linkTwo="/Nature-Sounds"
                    linkThree="/Relaxing-Sounds"
                    buttonOne={<div> <i className="fas fa-paw fa-5x"></i> <p className="font-buttons-text">Animals</p> </div>}
                    buttonTwo={<div> <i className="fas fa-leaf fa-5x"></i> <p className="font-buttons-text">Nature</p> </div>}
                    buttonThree={<div> <i className="fas fa-couch fa-5x"></i> <p className="font-buttons-text">Relax</p> </div>}
                />}
            />
            <Route exact path="/Learn"
                render={(props) => <ButtonPage {...props}
                    linkOne="/Spelling"
                    linkTwo="/Coloring"
                    linkThree="/Drawing"
                    buttonOne={<div> <i class="fas fa-spell-check fa-5x"></i> <p className="font-buttons-text">Spelling</p> </div>}
                    buttonTwo={<div> <i className="fas fa-paint-brush fa-5x"></i> <p className="font-buttons-text">Coloring</p> </div>}
                    buttonThree={<div> <i className="fas fa-palette fa-5x"></i> <p className="font-buttons-text">Drawing</p> </div>}
                />}
            />

        </div>
    </Router>
    , document.getElementById('root')
);
registerServiceWorker();
