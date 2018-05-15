import React, { Component } from "react";
import "./Auth.css";
import download from "./download.png";
import axios from "axios";
import { Link } from "react-router-dom";

class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: " ",
      password: " "
    };
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.register = this.register.bind(this);
  }
  handleUsername(e) {
    this.setState({ username: e.target.value });
  }
  handlePassword(e) {
    this.setState({ password: e.target.value });
  }
  register() {
    axios
      .post(`/api/register`, {
        username: this.state.username,
        password: this.state.password
      })
      .then(response => console.log("ok"))
      .catch(console.log);
  }

  render() {
    return (
      <div className="auth-body">
        <form id="auth-login">
          <img src={download} alt="icon" />
          <h1 className="helo-tag">Helo</h1>
          <div className="auth-inputs">
            <p>Username:</p>
            <input
              type="text"
              value={this.state.username}
              onChange={this.handleUsername}
            />
          </div>
          <div className="auth-inputs">
            <p>Password:</p>
            <input
              type="text"
              value={this.state.password}
              onChange={this.handlePassword}
            />
          </div>
          <div className="button-container">
            <button className="auth-buttons">Login</button>
            <Link to="/dashboard">
              <button className="auth-buttons" onClick={() => this.register()}>
                Register
              </button>
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default Auth;
