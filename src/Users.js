import React, { Component } from "react";

class Users extends Component {
  render() {
    return (
      <ul>
        {this.props.users.map(user => (
          <li key={user.name}>{user.name}</li>
        ))}
      </ul>
    );
  }
}

export default Users;
