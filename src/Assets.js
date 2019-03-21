import React, { Component } from "react";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

class Assets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      assets: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    fetch("https://versergateway.com.au/VerserAssetLeasingServices/assets/ssn")
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          assets: json
        });
      });
  }

  render() {
    var { isLoaded, assets } = this.state;

    if (!isLoaded) {
      return <div>Loading</div>;
    }

    return (
      <div className="App">
        <table className="table table-list-search">
          <thead>
            <tr>
              {/* <th>ID</th> */}
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
          <tbody>
            {assets.map(item => (
              <tr key={assets._id}>
                {/* <td> {item.Id}</td> */}
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
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default Assets;
