import React, { Component } from "react";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

class Plans extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plans: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    fetch(
      "https://versergateway.com.au/VerserAssetLeasingServices/MasteData/PlansList"
    )
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          plans: json
        });
      });
  }

  render() {
    var { isLoaded, plans } = this.state;

    if (!isLoaded) {
      return <div>Loading</div>;
    }

    return (
      <div className="App">
      <h1> Plans </h1>
        <table className="table table-list-search">
          <thead>
            <tr>
              <th>Plan Name</th>
              <th>Monthly Cost</th>
              <th>Contract Length</th>
              <th>Created By</th>
              <th>Created</th>
              <th>Modified By</th>
              <th>Modified</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {plans.map(item => (
              <tr key={plans._id}>
                <td> {item.planName}</td>
                <td> {item.monthyCost}</td>
                <td> {item.contractLength}</td>
                <td> {item.createdBy}</td>
                <td> {item.created}</td>
                <td> {item.modifiedBy}</td>
                <td> {item.modified}</td>
                <td>
                  <button
                    onClick={() => this.handleDelete(plans)}
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
export default Plans;
