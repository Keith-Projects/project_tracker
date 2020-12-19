import React, { Component } from "react";

export class UserSignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
    };
  }

  handleUserChange = (event) => {
    this.setState({
      userName: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alert(this.state.userName);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="userName">Username:</label>
            <input
              type="text"
              name="userName"
              id="userName"
              required={true}
              value={this.state.userName}
              onChange={this.handleUserChange}
            />
          </div>

          <div>
            <button type="submit" id="signInBtn">
              Sign In
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default UserSignIn;
