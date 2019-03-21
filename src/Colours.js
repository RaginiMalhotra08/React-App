import React, { Component } from "react";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { colors } from "material-ui/styles";
// import Pagination from "./common/pagination";

//table is aligned in this component only, apply the same code for table tag in other components.

class Colours extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colours: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    fetch(
      "https://versergateway.com.au/VerserAssetLeasingServices/MasteData/Colours"
    )
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          colours: json
        });
      });
  }

  handleDelete = colour => {
    console.log(colour); //Delete this line to use next 2 lines.

    // const colours = this.state.colours.filter(i => i._id !== colour._id);
    // this.setState({ colours });
  };

  // handlePageChange = page => {
  //   console.log(page);
  // };

  render() {
    var { isLoaded, colours } = this.state;


    if (!isLoaded) {
      return <div>Loading</div>;
    }

    return (
      <React.Fragment>
        {/* <div className="App"> */}
        <h1> Colours </h1>
        <table className="table table-list-search">
          <thead>
            <tr>
              <th>colourName</th>
              <th>CreatedBy</th>
              <th>Created</th>
              <th>Modified By</th>
              <th>Modified</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {colours.map(colour => (
              <tr key={colours._id}>
                <td> {colour.colourName}</td>
                <td> {colour.createdBy}</td>
                <td> {colour.created}</td>
                <td> {colour.modifiedBy}</td>
                <td> {colour.modified}</td>
                <td>
                  <button
                    onClick={() => this.handleDelete(colour)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* <Pagination
          itemsCount={count}
          pageSize={this.state.pageSize}
          onPageChange={this.handlePageChange}
        /> */}
        {/* </div> */}
      </React.Fragment>
    );
  }
}
export default Colours;
