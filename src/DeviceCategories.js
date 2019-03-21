import React, { Component } from "react";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

class DeviceCategories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      catagories: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    fetch(
      "https://versergateway.com.au/VerserAssetLeasingServices/MasteData/DevicecategoriesList"
    )
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          catagories: json
        });
      });
  }

  render() {
    var { isLoaded, catagories } = this.state;

    if (!isLoaded) {
      return <div>Loading</div>;
    }

    return (
      <div className="App">
        <h1> Device Categories </h1>
        <table className="table table-list-search table bordered">
          <thead>
            <tr>
              <th>Device Category Name</th>
              <th>Created By</th>
              <th>Created</th>
              <th>Modified By</th>
              <th>Modified</th>
              <th/>
            </tr>
          </thead>
          <tbody>
            {catagories.map(item => (
              <tr key={catagories._id}>
                <td> {item.deviceCategoryName} </td>
                <td> {item.createdBy}</td>
                <td> {item.created}</td>
                <td>{item.modifiedBy}</td>
                <td> {item.modified}</td>
                <td>
                  <button
                    onClick={() => this.handleDelete(catagories)}
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
export default DeviceCategories;
