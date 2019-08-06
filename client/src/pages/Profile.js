import React, { Component } from 'react';
import withAuth from './../components/withAuth';
import "../App.css";
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
    this.setState({ metrics: ["... nothing! Under construction! This will be a pie chart displaying metrics data."] })
  }


  render() {
    return (
      <div className="container Profile">
        <div className="row">
          <div className="col-md">
            <br></br>
            <h1 className="pangolin-text-title" >Welcome to your DANI profile, {this.state.username} !</h1>
            <br></br><br></br>
            <h3 className="pangolin-text-title">Press the button below to see your stats</h3>
            <br></br><hr></hr>
            <div className="row">
              <div className="col-md-12 centered-btn">
                <button className="metrics-list-display" onClick={() => this.readMetrics()}>As a List </button>
              </div>
              {/* <div className="col-md-6 centered-btn">
                <button className="metrics-pie-display" onClick={() => this.comingSoon()}>Coming Soon! <i className="fas fa-wrench"></i></button>
              </div> */}
            </div>
            <hr></hr>
          </div>
          <ul className="unorderedList col-md-12">
            <br />
            {this.state.metrics.length ? (
              <div className="metrics-list-container">
                <div className="row">
                  <div className="col-md-12">{this.state.metrics.map(metric =>
                    <li className="pangolin-text-title" key={metric}>Visits to {metric} </li>
                  )} </div>
                </div>
              </div>
            ) : (<div></div>)}
          </ul>
        </div>
      </div>
    )
  }
}

export default withAuth(Profile);