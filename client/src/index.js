import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';

import registerServiceWorker from './registerServiceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import axios from "axios";

// Our Components
import Login from './pages/Login';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import About from './pages/About';
import Navbar from './components/Navbar';
import Sketch from './components/Sketch';
import Reddit from './components/Reddit';
// import Sound from './components/Sounds';
import AnimalSound from './components/AnimalSounds';
import NatureSound from './components/NatureSounds';
import RelaxSound from './components/RelaxSounds';
import Video from './components/Video';
import ButtonPage from './components/ButtonPage';
import Image360 from './components/Image360';
import Coloring from './components/Coloring';


import Spelling from './components/Spelling';
// Here is if we have an id_token in localStorage
if (localStorage.getItem("id_token")) {
    // then we will attach it to the headers of each request from react application via axios
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('id_token')}`;
}

ReactDOM.render(
    <Router>
        <div>
            <Navbar />
            {/* <Route exact path="/" component={App} /> */}
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/about" component={About} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/sketch" component={Sketch} />
            <Route exact path="/reddit" component={Reddit} />
            <Route exact path="/animalSounds" component={AnimalSound} />
            <Route exact path="/natureSounds" component={NatureSound} />
            <Route exact path="/relaxSounds" component={RelaxSound} />
            <Route exact path="/videos" component={Video} />
            <Route exact path="/spelling" component={Spelling} />
            <Route exact path="/image360" component={Image360} />
            <Route exact path="/coloring" component={Coloring} />
            
            <Route exact path="/"
                render={(props) => <ButtonPage {...props}
                    linkOne="/Look"
                    linkTwo="/Listen"
                    linkThree="/Learn"
                    buttonOne={<div> <i class="fas fa-eye fa-5x"></i> <p className="font-buttons-text">Look</p> </div> }
                    buttonTwo={<div> <i class="fas fa-headphones-alt fa-5x"></i> <p className="font-buttons-text">Listen</p> </div> }
                    buttonThree={<div> <i class="fab fa-leanpub fa-5x"></i> <p className="font-buttons-text">Learn</p> </div> }
                />}
            />  
             <Route exact path="/Look"
                render={(props) => <ButtonPage {...props}
                    linkOne="/reddit"
                    linkTwo="/videos"
                    linkThree="/image360"
                    buttonOne={<div> <i class="fas fa-camera fa-5x"></i> <p className="font-buttons-text">Images</p> </div> }
                    buttonTwo={<div> <i class="fas fa-video fa-5x"></i> <p className="font-buttons-text">Videos</p> </div> }
                    buttonThree={<div> <i class="fas fa-expand-arrows-alt fa-5x"></i> <p className="font-buttons-text">360</p> </div> }
                />}
            />
            <Route exact path="/Listen"
                render={(props) => <ButtonPage {...props}
                    linkOne="/animalSounds"
                    linkTwo="/natureSounds"
                    linkThree="/relaxSounds"
                    buttonOne={<div> <i class="fas fa-paw fa-5x"></i> <p className="font-buttons-text">Animals</p> </div> }
                    buttonTwo={<div> <i class="fas fa-leaf fa-5x"></i> <p className="font-buttons-text">Nature</p> </div> }
                    buttonThree={<div> <i class="fas fa-couch fa-5x"></i> <p className="font-buttons-text">Relax</p> </div> }
                />}
            />
            <Route exact path="/Learn"
                render={(props) => <ButtonPage {...props}
                    linkOne="/spelling"
                    linkTwo="/coloring"
                    linkThree="/sketch"
                    buttonOne={<div> <i class="fas fa-certificate fa-5x"></i> <p className="font-buttons-text">Spelling</p> </div> }
                    buttonTwo={<div> <i class="fas fa-paint-brush fa-5x"></i> <p className="font-buttons-text">Coloring</p> </div> }
                    buttonThree={<div> <i class="fas fa-palette fa-5x"></i> <p className="font-buttons-text">Drawing</p> </div> }
                />}
            />
           

        </div>
    </Router>
    , document.getElementById('root')
);
registerServiceWorker();
