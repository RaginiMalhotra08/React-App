// import React, { Component } from 'react';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import "react-tabs/style/react-tabs.css";
import React, { Component } from 'react';



class NewContract extends React.Component {

    constructor() {
        super();
        this.state = {}
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }
    handleSubmit(event) {
        event.preventDefault();
        fetch("https://versergateway.com.au/VerserAssetLeasingServices/NewContract/CreateNewContract",
            {
                method: 'POST',
                cache: 'no-cache',
                headers: {
                    'Accept': 'application/json',
                    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
                    'Content-Type': 'application/json'

                },
                body: JSON.stringify(this.state)
            })
            .then((resp) => resp.json())
            .then(function (response) {
                console.info('fetch()', response);
                return response;
            });
    }

    render() {
        return (
            <div>
                <section className="companydetails">

                    <form id="submit_job" onSubmit={this.handleSubmit} onChange={this.handleChange}>

                        <fieldset className="box">
                            <p>
                                <label className="textlabel" htmlFor="firstNameInput">StartDate:</label>
                                <input  name="StartDate" type="date" required="required" autoFocus="autofocus" className="textinput" />
                            </p>
                            <p>
                                <label className="textlabel" htmlFor="firstNameInput">EndDate:</label>
                                <input  name="EndDate" type="date" required="required" autoFocus="autofocus" className="textinput" />
                            </p>
                            <p>
                                <label className="textlabel" htmlFor="firstNameInput">ServiceNo:</label>
                                <input  name="ServiceNo" type="text" required="required" autoFocus="autofocus" className="textinput" />
                            </p>
                            <p>
                                <label className="textlabel" htmlFor="firstNameInput">Contract_Company:</label>
                                <input  name="Contract_Company" type="text" required="required" autoFocus="autofocus" className="textinput" />
                            </p>
                            <p>
                                <label className="textlabel" htmlFor="firstNameInput">Contract_EndUser:</label>
                                <input  name="Contract_EndUser" type="text" required="required" autoFocus="autofocus" className="textinput" />
                            </p>
                            <p>
                                <label className="textlabel" htmlFor="firstNameInput">Contract_Plan:</label>
                                <input  name="Contract_Plan" type="text" required="required" autoFocus="autofocus" className="textinput" />
                            </p>
                            <p>
                                <button type="submit">Submit</button>
                            </p>
                            {/* <p>
                                <label className="textlabel" htmlFor="countryInput">Plan:</label>
                                <select>
                                    <option value="volvo">Enterprise $80/24</option>
                                    <option value="saab">Business Flexi $49/12</option>
                                    <option value="opel">Business Flexi $49/24</option>
                                    <option value="opel">Business Everyday $39/24</option>
                                    <option value="opel">4GB Data Pack</option>
                                </select>
                            </p> */}
                        </fieldset>
                    </form>
                </section>
            </div>
        )

    }
}

export default NewContract;