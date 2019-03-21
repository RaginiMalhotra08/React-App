import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import SplitterLayout from 'react-splitter-layout';
import Assets from './Assets';
import EndUsersList from './EndUsersList';



class CreateCompany extends React.Component {

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
        //  const data=JSON.stringify(this.state) //new FormData(event.target);               
        alert(JSON.stringify(this.state));
        //  var PostData=JSON.stringify(this.state);
        //http://localhost:57390/company/create
        //  mode:"no-cors", 
        //https://versergateway.com.au/VerserAssetLeasingServices/Company/Create
        fetch("https://versergateway.com.au/VerserAssetLeasingServices/Company/Create",
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


    // const title = this.state.trials.map((x) => {
    //     return (<Tab key={x.id}> {x.id} </Tab>)
    // });
    // const text = this.state.trials.map((x) => {
    //     return (<Tab key={x.id}> {x.title} </Tab>)
    // });

    // const displayTrial = (
    //     <Tabs defaultIndex={1} onSelect={index => console.log(index)}>
    //     <TabList>
    //         {title}
    //     </TabList>
    //     {text}
    //     </Tabs>
    // )

    render() {
        return (
            <div>
                <Tabs defaultIndex={0} onSelect={index => console.log(index)}>
                    <TabList>
                        <Tab autoFocus="autofocus">Company Details</Tab>
                        <Tab>Assets</Tab>
                        <Tab>End Users</Tab>
                        <Tab>Catalogue</Tab>
                    </TabList>
                    <TabPanel>
                        <section className="companydetails">
                            {/* id="nav-home-tab"  */}
                            <form id="submit_job" onSubmit={this.handleSubmit} onChange={this.handleChange}>

                                <fieldset className="box">
                                    <p>
                                        <label className="textlabel" htmlFor="firstNameInput">CompanyName:</label>
                                        <input id="firstNameInput" name="CompanyName" type="text" required="required" autoFocus="autofocus" className="textinput" />
                                    </p>
                                    <p>
                                        <label className="textlabel" htmlFor="firstNameInput">AddressLine1:</label>
                                        <input id="firstNameInput" name="AddressLine1" type="text" required="required" className="textinput" />
                                    </p>
                                    <p>
                                        <label className="textlabel" htmlFor="firstNameInput">AddressLine2:</label>
                                        <input id="firstNameInput" type="text" name="AddressLine2" />
                                    </p>
                                    <p>
                                        <label className="textlabel" htmlFor="firstNameInput">Suburb:</label>
                                        <input type="text" name="Suburb" />
                                    </p>
                                    <p>
                                        <label className="textlabel" htmlFor="firstNameInput">State:</label>
                                        <input id="firstNameInput" name="State" type="text" className="textinput" />
                                    </p>
                                    <p>
                                        <label className="textlabel" htmlFor="streetInput">Postcode:</label>
                                        <input id="streetInput" name="Postcode" type="text" className="textinput" />
                                    </p>
                                    <p>
                                        <label className="textlabel" htmlFor="numberInput">Phone:</label>
                                        <input id="numberInput" name="Phone" type="text" className="textinput" />
                                    </p>
                                    <p>
                                        <label className="textlabel" htmlFor="cityInput">CreatedBy:</label>
                                        <input id="cityInput" name="CreatedBy" type="text" className="textinput" required="required" />
                                    </p>
                                    <p>
                                        <label className="textlabel" htmlFor="zipInput">Email</label>
                                        <input id="zipInput" type="email" className="textinput" name="email" />
                                    </p>

                                    <p>
                                        <label className="textlabel" htmlFor="zipInput">ServiceStartDate</label>
                                        <input id="zipInput" type="date" className="textinput" required="required" name="ServiceStartDate" />
                                    </p>
                                    <p>
                                        <label className="textlabel" htmlFor="zipInput">ServiceEndDate</label>
                                        <input id="zipInput" type="date" className="textinput" required="required" name="ServiceEndDate" />
                                    </p>
                                    <p>
                                        <button type="submit">Submit</button>
                                        <input type="reset" />
                                    </p>


                                    {/* <p>
                                        <label className="textlabel" htmlFor="countryInput">State:</label>
                                        <input id="zipInput" name="State" type="text" className="textinput" required="required" />
                                        <select name="State"> 
                                    <option value="volvo">NSW</option>
                                    <option value="saab">ACT</option>
                                    <option value="opel">QLD</option>
                                    <option value="opel">SA</option>
                                    <option value="opel">TAS</option>
                                    <option value="opel">VIC</option>
                                    <option value="audi">WA</option>
                                </select>
                                    </p>
                                    <p>
                                        <label className="textlabel" htmlFor="zipInput">Postcode</label>
                                        <input id="zipInput" name="Postcode" type="text" className="textinput" required="required" />
                                    </p>
                                    <p>
                                        <label className="textlabel" htmlFor="zipInput">Phone</label>
                                        <input id="zipInput" type="text" className="textinput" required="required" name="Phone" />
                                    </p>
                                    <p>
                                        <input type="submit" className="submitbutton" value="Submit" />
                                    </p> */}
                                </fieldset>
                            </form>
                        </section>
                    </TabPanel>
                    <TabPanel> <Assets />
                        {/* <table className="table table-list-search"  >
                        <thead>
                            <tr >
                                <th>Asset ID</th>
                                <th>Inventory Item</th>
                                <th>IMEI</th>
                                <th>Serial No.</th>
                                <th>SIM No.</th>
                                <th>Purchase Date</th>
                                <th>Contract</th>
                                <th>End User</th>
                                <th>Date Issued</th>
                                <th>Lifecycle Status</th>
                                <th>Created By</th>
                                <th>Created</th>
                                <th>Modified By</th>
                                <th>Modified</th>

                            </tr>
                        </thead>
                         <tbody>
                            <tr>

                                <td> {item.Id}</td>
                                <td> {item.AssetID}</td>
                                <td> {item.SerialNo}</td>
                                <td> {item.Asset_Company}</td>
                                <td> {item.IMEI}</td>
                                <td> {item.SIMNo}</td>
                                <td> {item.PurchaseOrderNo}</td>
                                <td> {item.PurchaseDate}</td>
                                <td> {item.PurchasePrice}</td>
                                <td> {item.DecomissionDate}</td>
                                <td> {item.Condition}</td>
                                <td> {item.BuyBackPrice}</td>
                                <td> {item.AquisitionDate}</td>
                                <td> {item.SPMD}</td>
                                <td> {item.FirstCommissionDate}</td>
                                <td> {item.LastCommissionDate}</td>
                                <td> {item.LastRepairDate}</td>
                                <td> {item.createdBy}</td>
                                <td> {item.created}</td>
                                <td> {item.modifiedBy}</td>
                                <td> {item.modified}</td>
                                <td> {item.Asset_Contract}</td>
                                <td> {item.Asset_EndUser}</td>
                                <td> {item.Asset_LifecycleStatus}</td>
                                <td> {item.Asset_InventoryItem}</td>
                                <td> {item.Asset_OSVersion}</td>
                               

                            </tr>
                        </tbody> 
                    </table> */}
                    </TabPanel>
                    <TabPanel>
                        <EndUsersList />
                    </TabPanel>

                    <TabPanel>
                    <SplitterLayout >
                <SplitterLayout secondaryInitialSize={250}>
                    <SplitterLayout vertical secondaryInitialSize={750}>
                    <div>
                                <section className="companydetails">
                                    <form id="nav-home-tab" action="#" method="post" href="#nav-home" onSubmit={this.handleSubmit}>

                                        <fieldset className="box">
                                            <p>
                                                <label className="textlabel" htmlFor="countryInput">Device Category:</label>
                                                <select>
                                                    <option value="volvo">Handset</option>
                                                    <option value="saab">Tablet</option>
                                                    <option value="opel">USB Data</option>
                                                    <option value="opel">Accessory</option>
                                                    <option value="opel">SIM</option>
                                                    <option value="opel">Emerging Devices</option>
                                                    <option value="audi">Testing Category</option>
                                                </select>
                                            </p>
                                            <p>
                                                <label className="textlabel" htmlFor="countryInput">OEM:</label>
                                                <select>
                                                    <option value="volvo">Apple</option>
                                                    <option value="saab">Samsung</option>
                                                    <option value="opel">HTC</option>
                                                    <option value="opel">Telstra</option>
                                                    <option value="opel">Acer</option>
                                                    <option value="opel">Blackberry</option>
                                                    <option value="audi">LG</option>
                                                    <option value="opel">SONY</option>
                                                    <option value="opel">Nokia</option>
                                                    <option value="opel">Sharp</option>
                                                    <option value="audi">Siemens</option>
                                                </select>
                                            </p>
                                            <p>
                                                <label className="textlabel" htmlFor="countryInput">Form Factor:</label>
                                                <select>
                                                    <option value="volvo">Bar</option>
                                                    <option value="saab">Card</option>
                                                    <option value="opel">Fixed Gateway</option>
                                                    <option value="opel">Flip</option>
                                                    <option value="opel">Laptop</option>
                                                    <option value="opel">Qwerty</option>
                                                    <option value="audi">Slide</option>
                                                    <option value="opel">Tablet</option>
                                                    <option value="opel">Touch</option>
                                                    <option value="opel">USB</option>
                                                    <option value="audi">Basic Phone</option>
                                                </select>
                                            </p>

                                        </fieldset>
                                    </form>
                                </section>
                            </div>
                        <SplitterLayout>
                            <div><h4>Unallocated Inventory Items</h4></div>
                        </SplitterLayout>
                    </SplitterLayout>

                </SplitterLayout>
                <SplitterLayout primaryIndex={1} secondaryInitialSize={250}>
                    <div><h4>Catalogue Items</h4></div>

                </SplitterLayout>
            </SplitterLayout>
                        {/* <SplitterLayout>
                            <div>
                                <section className="companydetails">
                                    <form id="nav-home-tab" action="#" method="post" href="#nav-home" onSubmit={this.handleSubmit}>

                                        <fieldset className="box">
                                            <p>
                                                <label className="textlabel" htmlFor="countryInput">Device Category:</label>
                                                <select>
                                                    <option value="volvo">Handset</option>
                                                    <option value="saab">Tablet</option>
                                                    <option value="opel">USB Data</option>
                                                    <option value="opel">Accessory</option>
                                                    <option value="opel">SIM</option>
                                                    <option value="opel">Emerging Devices</option>
                                                    <option value="audi">Testing Category</option>
                                                </select>
                                            </p>
                                            <p>
                                                <label className="textlabel" htmlFor="countryInput">OEM:</label>
                                                <select>
                                                    <option value="volvo">Apple</option>
                                                    <option value="saab">Samsung</option>
                                                    <option value="opel">HTC</option>
                                                    <option value="opel">Telstra</option>
                                                    <option value="opel">Acer</option>
                                                    <option value="opel">Blackberry</option>
                                                    <option value="audi">LG</option>
                                                    <option value="opel">SONY</option>
                                                    <option value="opel">Nokia</option>
                                                    <option value="opel">Sharp</option>
                                                    <option value="audi">Siemens</option>
                                                </select>
                                            </p>
                                            <p>
                                                <label className="textlabel" htmlFor="countryInput">Form Factor:</label>
                                                <select>
                                                    <option value="volvo">Bar</option>
                                                    <option value="saab">Card</option>
                                                    <option value="opel">Fixed Gateway</option>
                                                    <option value="opel">Flip</option>
                                                    <option value="opel">Laptop</option>
                                                    <option value="opel">Qwerty</option>
                                                    <option value="audi">Slide</option>
                                                    <option value="opel">Tablet</option>
                                                    <option value="opel">Touch</option>
                                                    <option value="opel">USB</option>
                                                    <option value="audi">Basic Phone</option>
                                                </select>
                                            </p>

                                        </fieldset>
                                    </form>
                                </section>
                            </div>
                            <div>
                                <h3>Catalogue Items</h3>
                            </div>
                        </SplitterLayout> */}
                    </TabPanel>
                </Tabs>
            </div>
        )
    }
}

export default CreateCompany;