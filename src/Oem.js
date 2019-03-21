import React, { Component } from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

class Oem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      oem: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    fetch(
      "https://versergateway.com.au/VerserAssetLeasingServices/MasteData/OEMsList"
    )
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          oem: json
        });
      });
  }

  render() {
    var { isLoaded, oem } = this.state;

    if (!isLoaded) {
      return <div>Loading</div>;
    }

    return (
      <div className="App">
      <h1> OEMs </h1>
        <table className="table table-list-search">
          <thead>
            <tr>
              <th>OEM Name</th>
              <th>Created By</th>
              <th>Created</th>
              <th>Modified By</th>
              <th>Modified</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {oem.map(item => (
              <tr key={oem._id}>
                <td> {item.oemName}</td>
                <td> {item.createdBy}</td>
                <td> {item.created}</td>
                <td> {item.modifiedBy}</td>
                <td> {item.modified}</td>
                <td>
                  <button
                    onClick={() => this.handleDelete(oem)}
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
export default Oem;
