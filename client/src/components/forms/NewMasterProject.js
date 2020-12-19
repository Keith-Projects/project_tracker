import React, { Component } from "react";

export class NewMasterProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectName: "",
      description: "",
      assignTo: "",
      dateCreated: new Date().getDate(),
      availableUsers: [{}],
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    alert("form submitted");
  };

  // handle the project name field
  handleProjectName = (event) => {
    this.setState({
      projectName: event.target.value,
    });
  };

  // handle the description text area
  handleDescription = (event) => {
    this.setState({
      description: event.target.value,
    });
  };

  // handle the assignToField
  handleAssignTo = (event) => {
    this.setState({
      assignTo: event.target.value,
    });
  };

  // fetch the available users for the assign to field

  componentDidMount() {
    fetch("http://localhost/api/test/test.php")
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          alert(res.text());
        }
      })
      .then((data) => {
        this.setState({
          availableUsers: [...data.map((user) => user)],
        });
      });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="projectName">Project Name:</label>
            <input
              type="text"
              name="projectName"
              id="projectName"
              required={true}
              value={this.state.projectName}
              onChange={this.handleProjectName}
            />
          </div>
          <div>
            <label htmlFor="assignTo">Assign To:</label>
            <select
              id="assignTo"
              required={true}
              name="assignTo"
              onChange={this.handleAssignTo}
              value={this.state.assignTo}
            >
              <option value="none">Choose...</option>
              {this.state.availableUsers.map((user, i) => {
                return (
                  <option
                    key={i}
                    value={user.name}
                  >{`${user.name} (${user.permission})`}</option>
                );
              })}
            </select>
          </div>

          <div>
            <label htmlFor="projectDescription">Project Description:</label>
            <textarea
              id="projectDescription"
              name="projectDescription"
              required={true}
              rows="3"
              placeholder="Description of the project."
              onChange={this.handleDescription}
              value={this.state.description}
            ></textarea>
          </div>
          <div>
            <button type="submit" id="newMasterSubmit">
              Create
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default NewMasterProject;
