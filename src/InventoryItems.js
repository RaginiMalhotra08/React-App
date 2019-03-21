import React, { Component } from "react";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

class InventoryItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inventoryitems: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    fetch(
      "https://versergateway.com.au/VerserAssetLeasingServices/MasteData/InventoryItems"
    )
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          inventoryitems: json
        });
      });
  }

  render() {
    var { inventoryitems } = this.state;

    // if (!isLoaded) {
    //   return <div>Loading</div>
    // }

    return (
      <div className="App">
      <h1> Inventory Items </h1>
        <table className="table table-list-search">
          <thead>
            <tr>
              <th>Name</th>
              <th>Model</th>
              <th>Warranty</th>
              <th>Maintenance</th>
              <th>Supplier Lead Time</th>
              <th>Colour</th>
              <th>Category</th>
              <th>Form Factor</th>
              <th>OEM</th>
              <th>OS</th>
              <th>Created By</th>
              <th>Created</th>
              <th>Modified By</th>
              <th>Modified</th>
              <th/>
            </tr>
          </thead>
          <tbody>
            {inventoryitems.map(item => (
              <tr key={inventoryitems._id}>
                <td> {item.inventoryItemName}</td>
                <td> {item.model}</td>
                <td> {item.warrantyPeriod}</td>
                <td> {item.maintenancePeriod} </td>
                <td> {item.supplierLeadTime}</td>
                <td> {item.inventoryItem_Colour}</td>
                <td> {item.inventoryItem_DeviceCategory}</td>
                <td> {item.inventoryItem_FormFactor} </td>
                <td> {item.inventoryItem_OEM}</td>
                <td> {item.inventoryItem_OperatingSystem}</td>
                <td> {item.createdBy} </td>
                <td> {item.created}</td>
                <td> {item.modifiedBy}</td>
                <td> {item.modified}</td>
                <td>
                  <button
                    onClick={() => this.handleDelete(inventoryitems)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default InventoryItems;
