import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function Nav(props) {
  return (
    <div className="navbar">
      <Link to="/dashboard">
        <button>Home</button>
      </Link>
      <Link to="/post/:postid">
        <button>New Post</button>
      </Link>
      <Link to="/">
        <button>Logout</button>
      </Link>
      {console.log(props)}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    username: state.Nav
  };
}

export default connect(mapStateToProps)(Nav);
// export default Nav;
