import "./App.css";
import React, { Component } from "react";
import axios from "axios";
import Users from "./Users";
class App extends Component {
  state = {
    users: [],
    loading: true,
  };

  getUsers() {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      const getUsers = res.data;
      this.setState({ users: getUsers, loading: false });
    });
  }
  componentDidMount() {
    this.getUsers();
  }
  render() {
    return (
      <div>
        <Users users={this.state.users} loading={this.state.loading} />
      </div>
    );
  }
}

export default App;
