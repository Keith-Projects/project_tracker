import React, { Component } from "react";

class CreateUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personName: "",
      userName: "",
      permissions: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `name:${this.state.personName} and user: ${this.state.userName} and permissions: ${this.state.permissions}`
    );
  };

  handlePersonName = (event) => {
    this.setState({
      personName: event.target.value,
    });
  };

  handleUserName = (event) => {
    this.setState({
      userName: event.target.value,
    });
  };

  handlePermissions = (event) => {
    this.setState({
      permissions: event.target.value == "none" ? "none" : event.target.value,
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="personName">Name:</label>
            <input
              type="text"
              name="personName"
              id="personName"
              required={true}
              onChange={this.handlePersonName}
              value={this.state.personName}
            />
          </div>
          <div>
            <label htmlFor="userName">Username:</label>
            <input
              type="text"
              name="userName"
              required={true}
              id="userName"
              onChange={this.handleUserName}
              value={this.state.userName}
            />
          </div>
          <div>
            <label htmlFor="permissions">Permissions:</label>
            <select
              id="permissions"
              name="permissions"
              onChange={this.handlePermissions}
              value={this.state.value}
            >
              <option value="none">Choose...</option>
              <option value="manager">Manager(Admin)</option>
              <option value="developer">Developer</option>
            </select>
          </div>
          <div>
            <button type="submit" id="createUserBtn">
              Create
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateUser;
