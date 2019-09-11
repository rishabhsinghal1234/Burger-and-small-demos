import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userInfo: {
        firstName: "",
        lastName: "",
        age: "",
        gender: "",
        country: "",
        employee: false,
        team_lead: false,
        CEO: false
      }
    };
    // this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    console.log(event);
    const { name, value, type, checked } = event.target;
    console.log(name, value);

    if (type === "checkbox") {
      this.setState(prevState => {
        let updatedUserInfo = prevState.userInfo;
        updatedUserInfo[name] = checked;
        return {
          userInfo: {
            ...updatedUserInfo
          }
        };
      });
    } else {
      this.setState(prevState => {
        let updatedUserInfo = prevState.userInfo;
        updatedUserInfo[name] = value;
        return {
          userInfo: {
            ...updatedUserInfo
          }
        };
      });
    }
  }

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            value={this.state.firstName}
            placeholder="First Name"
            name="firstName"
            onChange={this.handleChange}
          />
          <br />
          <input
            type="text"
            value={this.state.lastName}
            placeholder="Last Name"
            name="lastName"
            onChange={this.handleChange}
          />
          <br />
          <input
            value={this.state.age}
            placeholder="Age"
            name="age"
            onChange={this.handleChange}
          />
          <br />
          <input
            type="radio"
            value="Male"
            placeholder="Age"
            name="gender"
            onChange={this.handleChange}
          />{" "}
          Male
          <input
            type="radio"
            value="Female"
            placeholder="Age"
            name="gender"
            onChange={this.handleChange}
          />{" "}
          Female
          <br />
          <select
            value={this.state.country}
            name="country"
            onChange={this.handleChange}
          >
            <option value="">--Please Select country--</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
            <option value="Germany">Germany</option>
          </select>
          <br />
          <input
            type="checkbox"
            checked={this.state.employee}
            name="employee"
            onChange={this.handleChange}
          />{" "}
          Employee
          <br />
          <input
            type="checkbox"
            checked={this.state.team_lead}
            name="team_lead"
            onChange={this.handleChange}
          />{" "}
          Team Lead
          <br />
          <input
            type="checkbox"
            checked={this.state.CEO}
            name="CEO"
            onChange={this.handleChange}
          />{" "}
          CEO
        </form>
        <hr />
        <h3>
          Name is {this.state.userInfo.firstName} {this.state.userInfo.lastName}
        </h3>
        <h3>age is {this.state.userInfo.age}</h3>
        <h3>gender is {this.state.userInfo.gender}</h3>
        <h3>country is {this.state.userInfo.country}</h3>
        <h3>
          Your Designation is :{this.state.userInfo.employee ? " Employee" : ""}
          {this.state.userInfo.team_lead ? " Lead" : ""}
          {this.state.userInfo.CEO ? " Ceo" : ""}
        </h3>
      </div>
    );
  }
}

export default App;
