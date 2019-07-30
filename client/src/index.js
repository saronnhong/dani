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
import ButtonPage from './components/ButtonPage/ButtonPage';


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
            <Route exact path="/canvas" component={Sketch} />
            <Route exact path="/reddit" component={Reddit} />
            <Route exact path="/animalSounds" component={AnimalSound} />
            <Route exact path="/natureSounds" component={NatureSound} />
            <Route exact path="/relaxSounds" component={RelaxSound} />
            <Route exact path="/videos" component={Video} />
            <Route exact path="/Sounds"
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
                    linkOne="/look"
                    linkTwo="/Sounds"
                    linkThree="/Learn"
                    buttonOne="Look"
                    buttonTwo="Listen"
                    buttonThree="Learn"
                />}
            />

        </div>
    </Router>
    , document.getElementById('root')
);
registerServiceWorker();
