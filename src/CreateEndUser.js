import React, { Component } from "react";
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";

class CreateEndUser extends Component {
  constructor() {
    super();
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    fetch(
      "https://versergateway.com.au/VerserAssetLeasingServices/CreateEndUsers/create",
      {
        method: "POST",
        cache: "no-cache",
        headers: {
          Accept: "application/json",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(this.state)
      }
    )
      .then(resp => resp.json())
      .then(function(response) {
        console.info("fetch()", response);
        return response;
      });
  }

  render() {
    return (
      <div>
        <section className="companydetails">
          <form
            id="submit_job"
            method="post"
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
          >
            <fieldset className="box">
              <p>
                <label className="textlabel" htmlFor="firstNameInput">
                  firstName:
                </label>
                <input
                  id="firstNameInput"
                  name="firstName"
                  type="text"
                  required="required"
                  autoFocus="autofocus"
                  className="textinput"
                />
              </p>
              <p>
                <label className="textlabel" htmlFor="firstNameInput">
                  lastName:
                </label>
                <input
                  id="firstNameInput"
                  name="lastName"
                  type="text"
                  required="required"
                  className="textinput"
                />
              </p>
              <p>
                <label className="textlabel" htmlFor="firstNameInput">
                  employeeNo:
                </label>
                <input
                  id="firstNameInput"
                  name="employeeNo"
                  type="text"
                  required="required"
                  className="textinput"
                />
              </p>
              <p>
                <label className="textlabel" htmlFor="firstNameInput">
                  department:
                </label>
                <input
                  id="firstNameInput"
                  name="department"
                  type="text"
                  required="required"
                  className="textinput"
                />
              </p>
              <p>
                <label className="textlabel" htmlFor="firstNameInput">
                  costCode:
                </label>
                <input
                  id="firstNameInput"
                  name="costCode"
                  type="text"
                  required="required"
                  className="textinput"
                />
              </p>
              <p>
                <label className="textlabel" htmlFor="firstNameInput">
                  endUserStatus:
                </label>
                <input
                  id="firstNameInput"
                  name="endUserStatus"
                  type="text"
                  required="required"
                  className="textinput"
                />
              </p>
              <p>
                <label className="textlabel" htmlFor="firstNameInput">
                  commencementDate:
                </label>
                <input
                  id="firstNameInput"
                  name="commencementDate"
                  type="date"
                  required="required"
                  className="textinput"
                />
              </p>
              <p>
                <label className="textlabel" htmlFor="firstNameInput">
                  terminationDate:
                </label>
                <input
                  id="firstNameInput"
                  name="terminationDate"
                  type="date"
                  required="required"
                  className="textinput"
                />
              </p>
              <p>
                <label className="textlabel" htmlFor="firstNameInput">
                  LastCommissionDate:
                </label>
                <input
                  id="firstNameInput"
                  name="LastCommissionDate"
                  type="date"
                  required="required"
                  className="textinput"
                />
              </p>
              <p>
                <label className="textlabel" htmlFor="firstNameInput">
                  userName:
                </label>
                <input type="text" name="userName" />
              </p>
              <p>
                <label className="textlabel" htmlFor="firstNameInput">
                  createdBy:
                </label>
                <input
                  id="firstNameInput"
                  name="createdBy"
                  type="text"
                  required="required"
                  className="textinput"
                />
              </p>
              <p>
                <label className="textlabel" htmlFor="firstNameInput">
                  created:
                </label>
                <input type="date" name="created" />
              </p>
              <p>
                <label className="textlabel" htmlFor="firstNameInput">
                  modifiedBy:
                </label>
                <input type="text" name="modifiedBy" />
              </p>
              <p>
                <label className="textlabel" htmlFor="firstNameInput">
                  modified:
                </label>
                <input
                  id="firstNameInput"
                  name="modified"
                  type="date"
                  required="required"
                  className="textinput"
                />
              </p>
              <p>
                <label className="textlabel" htmlFor="firstNameInput">
                  endUser_Company:
                </label>
                <input
                  id="firstNameInput"
                  name="endUser_Company"
                  type="text"
                  required="required"
                  className="textinput"
                />
              </p>
              <p>
                <label className="textlabel" htmlFor="firstNameInput">
                  endUser_Site:
                </label>
                <input type="text" name="endUser_Site" />
              </p>
              <p>
                <button type="submit">Submit</button>
              </p>
            </fieldset>
          </form>
        </section>
      </div>
    );
  }
}

export default CreateEndUser;
