import React, { Component } from "react";

export default class Users extends Component {
  render() {
    let content;
    if (this.props.loading) {
      content = (
        <div>
          <b>Loading data...</b>
        </div>
      );
    } else {
      content = this.props.users.map((user) => (
        <div key={user.id}>
          {user.username} : {user.name}
        </div>
      ));
    }
    return <div>{content}</div>;
  }
}
