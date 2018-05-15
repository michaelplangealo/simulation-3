import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import routes from "./routes";
import { withRouter } from "react-router";

class App extends Component {
  render() {
    console.log(this.props.location);
    return (
      <div className="App">
        {/* {if (this.props.location.pathname === "/"){<Nav/>}else {null}} */}
        {this.props.location.pathname === "/" ? null : <Nav />}
        {/* <Nav /> */}
        {routes}
      </div>
    );
  }
}

export default withRouter(App);
