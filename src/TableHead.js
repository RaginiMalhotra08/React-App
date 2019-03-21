
import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";


class TableHead extends Component {

    constructor() {
        super();
        this.state = {
            tableheads: []
        };
    }

    componentDidMount() {

        fetch('https://versergateway.com.au/VerserAssetLeasingServices/MasteData/OEMsList')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json,
                })
            });

    }

    render() {
        const displayTableHead = (

            <Tabs defaultIndex={1} onSelect={index => console.log(index)}>
                <TabList>
                    <Tab autoFocus="autofocus">Company Details</Tab>
                    <Tab>Assets</Tab>
                    <Tab>End Users</Tab>
                    <Tab>Catalogue</Tab>
                </TabList>
                <TabPanel>
                <section className="companydetails">
                    <form id="nav-home-tab" action="#" method="post" href="#nav-home" onSubmit={this.handleSubmit}>

                        <fieldset className="box">
                            <p>
                                <label className="textlabel" htmlFor="firstNameInput">Company Name:</label>
                                <input id="firstNameInput" name="FirstName" type="text" required="required" autoFocus="autofocus" className="textinput" />
                            </p>
                            <p>
                                <label className="textlabel" htmlFor="firstNameInput">Service Start Date:</label>
                                <input type="date" placeholder="false" />
                            </p>
                            <p>
                                <label className="textlabel" htmlFor="firstNameInput">Service End Date:</label>
                                <input type="date" placeholder="false" />
                            </p>
                            <p>
                                <label className="textlabel" htmlFor="emailInput">Login:</label>
                                <input id="emailInput" name="Email" type="email" className="textinput" required="required" />
                            </p>
                            <p>
                                <label className="textlabel" htmlFor="streetInput">Address Line 1:</label>
                                <input id="streetInput" name="Street" type="text" className="textinput" />
                            </p>
                            <p>
                                <label className="textlabel" htmlFor="numberInput">Address Line 2:</label>
                                <input id="numberInput" name="Number" type="text" className="textinput" />
                            </p>
                            <p>
                                <label className="textlabel" htmlFor="cityInput">Suburb:</label>
                                <input id="cityInput" name="City" type="text" className="textinput" required="required" />
                            </p>
                            <p>
                                <label className="textlabel" htmlFor="countryInput">State:</label>
                                <select>
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
                                <input id="zipInput" name="Zip" type="text" className="textinput" required="required" />
                            </p>
                            <p>
                                <input type="submit" className="submitbutton" value="Submit" />
                            </p>
                        </fieldset>
                    </form>
                    </section>
                </TabPanel>
                <TabPanel> <table className="table table-list-search"  >
                    <thead>
                        <tr >

                            <th>ID</th>
                            <th>Asset ID</th>
                            <th>Serial No.</th>
                            <th>Asset Company</th>
                            <th>IMEI</th>
                            <th>SIM No.</th>
                            <th>Purchase Order No.</th>
                            <th>Purchase Date</th>
                            <th>Purchase Price</th>
                            <th>Decomission Date</th>
                            <th>Condition</th>
                            <th>Buy Bucket Price</th>
                            <th>Aquisition Date</th>
                            <th>SPMD</th>
                            <th>First Commission Date</th>
                            <th>Last Commission Date</th>
                            <th>Last Repair Date</th>
                            <th>Created By</th>
                            <th>Created</th>
                            <th>Modified By</th>
                            <th>Modified</th>
                            <th>Asset Contract</th>
                            <th>Asset End User</th>
                            <th>Asset Lifecycle Status</th>
                            <th>Asset Inventory Item</th>
                            <th>Asset OS Version</th>
                        </tr>
                    </thead>
                    {/* <tbody>
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
                        </tbody> */}
                </table></TabPanel>
                <TabPanel>                    <table className="table table-list-search">
                    <thead>
                        <tr >

                            <th>OEM Name</th>
                            <th>Created By</th>
                            <th>Created</th>
                            <th>Modified By</th>
                            <th>Modified</th>
                        </tr>
                    </thead>
                    {/* <tbody>
                            <tr>
                                
                                <td> {item.oemName}</td>
                                <td> {item.createdBy}</td>
                                <td> {item.created}</td>
                                <td> {item.modifiedBy}</td>
                                <td> {item.modified}</td>

                            </tr>
                        </tbody> */}
                </table></TabPanel>
                <TabPanel><table className="table table-list-search" >
                    <thead>
                        <tr >
                            <th>Device Category Name</th>
                            <th>Created By</th>
                            <th>created</th>
                            <th>Modified By</th>
                            <th>Modified</th>
                        </tr>
                    </thead>
                    {/* <tbody>
<tr> 
  <td> {item.colourName} </td>
  <td> {item.createdBy}</td>
  <td> {item.created}</td>
  <td>{item.modifiedBy}</td>
  <td> {item.modified}</td>
</tr>
</tbody> */}
                </table></TabPanel>
            </Tabs>
        )
        return (
            <div>
                {displayTableHead}
                
            </div>
        )
    }
}

export default TableHead;