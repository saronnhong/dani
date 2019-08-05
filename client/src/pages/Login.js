import React, { Component } from 'react';
import AuthService from './../components/AuthService';
import { Link } from 'react-router-dom';
import "../App.css";

class Login extends Component {
  constructor() {
    super();
    this.Auth = new AuthService();
  }

  componentWillMount() {
    if (this.Auth.loggedIn()) {
      this.props.history.replace('/Home');
    }
  }

  handleFormSubmit = event => {
    event.preventDefault();

    this.Auth.login(this.state.email, this.state.password)
      .then(res => {
        // once user is logged in
        // take them to their profile page
        this.props.history.replace(`/profile`);
        window.location.reload();
      })
      .catch(err => {
        alert(err.response.data.message)
      });
  };

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
            <h1 className="page-title-name">Login</h1>
            <form onSubmit={this.handleFormSubmit}>
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
            <p><Link to="/signup" className="form-title-text">Go to Signup</Link></p>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;