import React, { Component } from "react";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

class EndUsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enduserlist: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    fetch(
      "https://versergateway.com.au/VerserAssetLeasingServices/EndUsers/EndUsersList"
    )
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          enduserlist: json
        });
      });
  }

  render() {
    var { isLoaded, enduserlist } = this.state;

    if (!isLoaded) {
      return <div>Loading</div>;
    }

    return (
      <div className="App">
        <table className="table table-list-search">
          <thead>
            <tr>
              <th>End User Company</th>
              <th>Employee No.</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Department</th>
              <th>Cost Code</th>
              <th>End User Status</th>
              <th>Commencement Date</th>
              <th>Termination Date</th>
              <th>User Name</th>
              <th>Created By</th>
              <th>Created</th>
              <th>Modified By</th>
              <th>Modified</th>
              <th>End User Site</th>
            </tr>
          </thead>
          <tbody>
            {enduserlist.map(item => (
              <tr key={enduserlist._id}>
                <td> {item.endUser_Company}</td>
                <td> {item.employeeNo}</td>
                <td> {item.firstName} </td>
                <td> {item.lastName}</td>
                <td>{item.department}</td>
                <td> {item.costCode}</td>
                <td> {item.endUserStatus}</td>
                <td> {item.commencementDate}</td>
                <td> {item.terminationDate}</td>
                <td> {item.userName}</td>
                <td> {item.createdBy}</td>
                <td> {item.created}</td>
                <td> {item.modifiedBy}</td>
                <td> {item.modified}</td>
                <td> {item.endUser_Site}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default EndUsersList;
