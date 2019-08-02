import React, { Component } from 'react';
import withAuth from './../components/withAuth';
import API from './../utils/API';

class Profile extends Component {

  state = {
    username: "",
    email: "",
    metricID: "",
    metrics: ""
  };

  componentDidMount() {
    API.getUser(this.props.user.id).then(res => {
      this.setState({
        username: res.data.username,
        email: res.data.email,
        metricID: res.data.metric
      })

    });
  }

  readMetrics() {
    API.getMetrics(this.state.metricID).then(res => {
      this.setState({
        metrics: Object.values(res.data[0])[0]
      })
    })
  }

  render() {
    return (
      <div className="container Profile">
        <h1>Welcome to your profile {this.state.username}</h1>
        <p>Your Email: {this.state.email}</p>
        <button onClick={() => this.readMetrics()}>Show my Stats!</button>
        <p>Visits to profile: {this.state.metrics}</p>
      </div>
    )
  }
}

export default withAuth(Profile);