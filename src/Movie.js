import React, { Component } from "react";
import Users from "./Users";

class Movie extends Component {
  render() {
    const { movieName, users } = this.props;
    if (this.props.users.length > 0) {
      return (
        <li>
          <h2>{movieName}</h2>
          <p>Liked By:</p>
          <Users users={users} />
        </li>
      );
    } else {
      return (
        <li>
          <h2>{movieName}</h2>
          <p>None of the current users liked this movie</p>
        </li>
      );
    }
  }
}

export default Movie;
