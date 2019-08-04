import React, { Component } from 'react';
import withAuth from './../components/withAuth';
import API from './../utils/API';

class Profile extends Component {

  state = {
    username: "",
    email: "",
    metricID: "",
    metrics: []
  };

  componentDidMount() {
    API.getUser(this.props.user.id).then(res => {
      this.setState({
        username: res.data.username,
        email: res.data.email,
        metricID: res.data.metric
      })
      let pageOn = this.props.history.location.pathname.replace("/", "")
      API.addToMetrics(res.data.metric, pageOn)
    });
  }

  readMetrics() {
    API.getMetrics(this.state.metricID).then(res => {
      let metrics = []
      for (let [key, value] of Object.entries(res.data[0])) {
        if (metrics.length === Object.keys(res.data[0]).length - 2) {
          break
        }
        metrics.push(`${key}: ${value}`);
      }
      this.setState({
        metrics: metrics
      })
    })
  }

  comingSoon() {
    // document.getElementsByClassName("metrics-list-container").classList.remove("is-hidden-element");
    this.setState({metrics: ["... nothing! Under construction! This will be a pie chart displaying metrics data."]})
  }


  render() {
    return (
      <div className="container Profile">
        <br></br>
        <h1 className="pangolin-text-title" >Welcome to your DANI profile {this.state.username}...</h1>
        <br></br><p className="pangolin-text-title">Your Email: {this.state.email}</p>
        <br></br><br></br>
        <h3 className="pangolin-text-title">Press one of the options below to see your stats!</h3>
        <br></br><hr></hr>
        <button className="metrics-list-display" onClick={() => this.readMetrics()}>As a List...   <i className="fas fa-list">   </i></button>
        <button className="metrics-pie-display" onClick={() => this.comingSoon()}>Coming Soon!...  <i className="fas fa-wrench"></i></button>
        <hr></hr>
        <ul>
          <div className="metrics-list-container">
          {this.state.metrics.map(metric => 
            <li className="pangolin-text-title" key={metric}>Visits to {metric}</li>
          )}
          </div>
        </ul>
      </div>
    )
  }
}

export default withAuth(Profile);