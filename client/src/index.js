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
import Navbar from './components/Navbar';
import Sketch from './components/Sketch';
import Reddit from './components/Reddit';
// import Sound from './components/Sounds';
import AnimalSound from './components/AnimalSounds';
import NatureSound from './components/NatureSounds';
import RelaxSound from './components/RelaxSounds';
import Video from './components/Video';
import ButtonPage from './components/ButtonPage';

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
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/sketch" component={Sketch} />
            <Route exact path="/reddit" component={Reddit} />
            <Route exact path="/animalSounds" component={AnimalSound} />
            <Route exact path="/natureSounds" component={NatureSound} />
            <Route exact path="/relaxSounds" component={RelaxSound} />
            <Route exact path="/videos" component={Video} />
            <Route exact path="/spelling" component={Spelling} />
            <Route exact path="/Listen"
                render={(props) => <ButtonPage {...props}
                    linkOne="/animalSounds"
                    linkTwo="/natureSounds"
                    linkThree="/relaxSounds"
                    buttonOne="Animals"
                    buttonTwo="Nature"
                    buttonThree="Relax"
                />}
            />
            <Route exact path="/"
                render={(props) => <ButtonPage {...props}
                    linkOne="/Look"
                    linkTwo="/Listen"
                    linkThree="/Learn"
                    buttonOne="Look"
                    buttonTwo="Listen"
                    buttonThree="Learn"
                />}
            />
            <Route exact path="/Learn"
                render={(props) => <ButtonPage {...props}
                    linkOne="/videos"
                    linkTwo="/Color"
                    linkThree="/sketch"
                    buttonOne="Videos"
                    buttonTwo="Coloring"
                    buttonThree="Drawing"
                />}
            />
            <Route exact path="/Look"
                render={(props) => <ButtonPage {...props}
                    linkOne="/reddit"
                    linkTwo="/TBD"
                    linkThree="/TBD"
                    buttonOne="Images"
                    buttonTwo="TBD"
                    buttonThree="TBD"
                />}
            />

        </div>
    </Router>
    , document.getElementById('root')
);
registerServiceWorker();
