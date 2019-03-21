import React, { Component } from "react";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

class LifecycleStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lifecyclestatuslist: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    fetch(
      "https://versergateway.com.au/VerserAssetLeasingServices/MasteData/LifeCycleStatusSetList"
    )
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          lifecyclestatuslist: json
        });
      });
  }

  render() {
    var { lifecyclestatuslist } = this.state;

    // if (!isLoaded) {
    //   return <div>Loading</div>
    // }

    return (
      <div className="App">
      <h1> Lifecycle Status </h1>
        <table className="table table-list-search">
          <thead>
            <tr>
              <th>Status Name</th>
              <th>Sort Order</th>
              <th>Created By</th>
              <th>Created</th>
              <th>Modified By</th>
              <th>Modified</th>
              <th/>
            </tr>
          </thead>
          <tbody>
            {lifecyclestatuslist.map(item => (
              <tr>
                <td> {item.lifecycleStatusName} </td>
                <td> {item.sortOrder}</td>
                <td> {item.createdBy}</td>
                <td> {item.created}</td>
                <td> {item.modifiedBy}</td>
                <td> {item.modified}</td>
                <td>
                  <button
                    onClick={() => this.handleDelete(lifecyclestatuslist)}
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
export default LifecycleStatus;
