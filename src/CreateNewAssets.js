import React, { Component } from "react";
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";

class CreateNewAssets extends Component {
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
      "https://versergateway.com.au/VerserAssetLeasingServices/assets/CreateNewAsset",
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
            action="#"
            method="post"
            href="#nav-home"
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
          >
            <fieldset className="box">
              <p>
                <label className="textlabel" htmlFor="firstNameInput">
                  AssetID:
                </label>
                <input
                  id="firstNameInput"
                  name="AssetID"
                  type="text"
                  required="required"
                  autoFocus="autofocus"
                  className="textinput"
                />
              </p>
              <p>
                <label className="textlabel" htmlFor="firstNameInput">
                  Asset_Company:
                </label>
                <input
                  id="firstNameInput"
                  name="Asset_Company"
                  type="text"
                  required="required"
                  className="textinput"
                />
              </p>
              <p>
                <label className="textlabel" htmlFor="firstNameInput">
                  Asset_Contract:
                </label>
                <input
                  id="firstNameInput"
                  name="Asset_Contract"
                  type="text"
                  required="required"
                  className="textinput"
                />
              </p>
              <p>
                <label className="textlabel" htmlFor="firstNameInput">
                  IMEI:
                </label>
                <input
                  id="firstNameInput"
                  name="IMEI"
                  type="text"
                  required="required"
                  className="textinput"
                />
              </p>
              <p>
                <label className="textlabel" htmlFor="firstNameInput">
                  SerialNo:
                </label>
                <input
                  id="firstNameInput"
                  name="SerialNo"
                  type="text"
                  required="required"
                  className="textinput"
                />
              </p>
              <p>
                <label className="textlabel" htmlFor="firstNameInput">
                  SIMNo:
                </label>
                <input
                  id="firstNameInput"
                  name="SIMNo"
                  type="text"
                  required="required"
                  className="textinput"
                />
              </p>
              <p>
                <label className="textlabel" htmlFor="firstNameInput">
                  SPMD:
                </label>
                <input
                  id="firstNameInput"
                  name="SPMD"
                  type="text"
                  required="required"
                  className="textinput"
                />
              </p>
              <p>
                <label className="textlabel" htmlFor="firstNameInput">
                  FirstCommissionDate:
                </label>
                <input
                  id="firstNameInput"
                  name="FirstCommissionDate"
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
                  BuyBackPrice:
                </label>
                <input type="text" name="BuyBackPrice" />
              </p>
              <p>
                <label className="textlabel" htmlFor="firstNameInput">
                  PurchaseOrderNo:
                </label>
                <input
                  id="firstNameInput"
                  name="PurchaseOrderNo"
                  type="text"
                  required="required"
                  className="textinput"
                />
              </p>
              <p>
                <label className="textlabel" htmlFor="firstNameInput">
                  PurchaseDate:
                </label>
                <input type="date" name="PurchaseDate" />
              </p>
              <p>
                <label className="textlabel" htmlFor="firstNameInput">
                  Condition:
                </label>
                <input type="text" name="Condition" />
              </p>
              <p>
                <label className="textlabel" htmlFor="firstNameInput">
                  AquisitionDate:
                </label>
                <input
                  id="firstNameInput"
                  name="AquisitionDate"
                  type="date"
                  required="required"
                  className="textinput"
                />
              </p>
              <p>
                <label className="textlabel" htmlFor="firstNameInput">
                  Asset_EndUser:
                </label>
                <input
                  id="firstNameInput"
                  name="Asset_EndUser"
                  type="text"
                  required="required"
                  className="textinput"
                />
              </p>
              <p>
                <label className="textlabel" htmlFor="firstNameInput">
                  Asset_InventoryItem:
                </label>
                <input type="text" name="Asset_InventoryItem" />
              </p>
              <p>
                <label className="textlabel" htmlFor="firstNameInput">
                  Asset_LifecycleStatus:
                </label>
                <input type="text" name="Asset_LifecycleStatus" />
              </p>
              <p>
                <label className="textlabel" htmlFor="firstNameInput">
                  Asset_OSVersion:
                </label>
                <input type="text" name="Asset_OSVersion" />
              </p>
              <p>
                <label className="textlabel" htmlFor="firstNameInput">
                  CreateBy:
                </label>
                <input type="text" name="CreateBy" />
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

export default CreateNewAssets;
