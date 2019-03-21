import React, { Component } from "react";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

class Carriers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carriers: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    fetch(
      "https://versergateway.com.au/VerserAssetLeasingServices/MasteData/CarriersList"
    )
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          carriers: json
        });
      });
  }

  render() {
    var { isLoaded, carriers } = this.state;

    if (!isLoaded) {
      return <div>Loading</div>;
    }

    return (
      <div className="App">
        <h1> Carriers </h1>
        
        <table className="table table-list-search">
          <thead>
            <tr>
              <th>Carrier Name</th>
              <th>Created By</th>
              <th>Created</th>
              <th>Modified By</th>
              <th>Modified</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {carriers.map(item => (
              <tr key={carriers._id}>
                <td> {item.carrierName} </td>
                <td> {item.createdBy}</td>
                <td> {item.created}</td>
                <td>{item.modifiedBy}</td>
                <td> {item.modified}</td>
                <td>
                  <button
                    onClick={() => this.handleDelete(carriers)}
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
export default Carriers;
