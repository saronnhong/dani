import React, { Component } from 'react';
import withAuth from './../components/withAuth';
import API from './../utils/API';
import { Link } from 'react-router-dom';

class Profile extends Component {

  state = {
    username: "",
    email: "",
    metric: ""
  };

  componentDidMount() {
    API.getUser(this.props.user.id).then(res => {
      this.setState({
        username: res.data.username,
        email: res.data.email,
        metric: res.data.metric
      })

    });
  }

  readMetrics() {
    API.getMetrics(this.state.metric).then(res =>
      this.setState({
        metrics: res.data
      })
      )
  }

  render() {
    return (
      <div className="container Profile">
        <h1>Welcome to your profile {this.state.username}</h1>
        <p>Your Email: {this.state.email}</p>
        <button onClick={()=> this.readMetrics}>Show my Stats!</button>
      </div>
    )
  }
}

export default withAuth(Profile);