import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from './../components/AuthService';
import API from './../utils/API';
import "../App.css";

class Signup extends Component {
  constructor() {
    super();
    this.Auth = new AuthService();
  }

  componentWillMount() {
    if (this.Auth.loggedIn()) {
      this.props.history.replace('/');
    }
  }

  handleFormSubmit = event => {
    event.preventDefault();
    API.signUpUser(this.state.username, this.state.email, this.state.password)
      .then(res => {
        // once the user has signed up
        // send them to the login page
        this.startMetrics();
      })
      .catch(err => alert(err));
  };

  startMetrics = () => {
    API.startMetrics()
      .then(res => {
        this.props.history.replace('/login');
      }).catch(err => console.log(err))
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1 className="page-title-name">Signup</h1>
            <form onSubmit={this.handleFormSubmit}>
              <div className="form-group">
                <label htmlFor="username" className="form-title-text">Username:</label>
                <input className="form-control"
                  placeholder="Username"
                  name="username"
                  type="text"
                  id="username"
                  onChange={this.handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-title-text">Email address:</label>
                <input className="form-control"
                  placeholder="Email"
                  name="email"
                  type="email"
                  id="email"
                  onChange={this.handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="pwd" className="form-title-text">Password:</label>
                <input className="form-control"
                  placeholder="Password"
                  name="password"
                  type="password"
                  id="pwd"
                  onChange={this.handleChange} />
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <p><Link to="/login" className="form-title-text">Go to Login</Link></p>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;