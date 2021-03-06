import React, { Component } from "react";
import logo from "./images/VerserLogo.png";
// import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import "./App.css";
// import TableHead from './TableHead';
// import ReactDom from 'react-dom';
// import Submitjob from './Submitjob';
import Test from "./Test";
import DeviceCategories from "./DeviceCategories";
import InventoryItems from "./InventoryItems";
import Carriers from "./Carriers";
import LifecycleStatus from "./LifecycleStatus";
import Oem from "./Oem";
import OperatingSystems from "./OperatingSystems";
import Plans from "./Plans";
import Assets from "./Assets";
import CreateCompany from "./CreateCompany";
import FormFactors from "./FormFactors";
import Colours from "./Colours";
import NewContract from "./NewContract";
import CreateEndUser from "./CreateEndUser";
import CreateNewAssets from "./CreateNewAssets";
// import CreateNewContract from './CreateNewContract'
import CreateCompanyTest from "./CreateCompanyTest";

import Layout from "./Layout";
import Random from "./Random";

import {
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Route from "react-router-dom/Route";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img className="App-logo" src={logo} alt="logo" />
          </header>
          <Nav>
            {/* <NavLink href="#">Search</NavLink> */}
            {/* <NavLink href="#">Master Data</NavLink> */}
            {/* <NavLink href="#">Administration</NavLink> */}
            {/* <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Tasks
      </DropdownToggle>
      
              <DropdownMenu left>
                <DropdownItem >
                  Create New Assets
        </DropdownItem>
                <DropdownItem>
                  Create New Company
        </DropdownItem>
                <DropdownItem>
                  Create New Contract
        </DropdownItem>
                <DropdownItem>
                  Create New End User
        </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> */}

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Tasks
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>
                  <Link to="/CreateNewAssets">Create New Assets </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/CreateCompany">Create New Company </Link>
                </DropdownItem>
                {/* <DropdownItem>
                  <Link to="/CreateNewContract">CreateNewContractBasan</Link>
                </DropdownItem> */}
                <DropdownItem>
                  <Link to="/NewContract">Create New Contract </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/CreateEndUser">Create New End User </Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Lists
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Company List</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Search
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Search Assets</DropdownItem>
                <DropdownItem>Search Contracts</DropdownItem>
                <DropdownItem>Search End Users</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Master Data
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>
                  <Link to="/Carriers">Carriers </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/Colours">Colours </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/DeviceCategories">DeviceCategories </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/FormFacotrs">Form Factors </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/InventoryItems">Inventory Items </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/LifecycleStatus">Lifecycle Status </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/Oem">OEMs </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/OperatingSystems">Operating Systems </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/Plans">Plans </Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Administration
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Roles</DropdownItem>
                <DropdownItem>Users</DropdownItem>
                <DropdownItem>
                  <Link to="/Layout">Layout </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/Random">Random </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/CreateCompanyTest">Create Company Test </Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            {/* <input type="search" className="searchbox" placeholder="Search" ref={input => this.search = input} onChange={this.handleInputChange} /> */}
          </Nav>
          <hr />

          {/* <Submitjob /> */}
          {/* <Test/> */}
          {/* <DeviceCategories/> */}
          {/* <InventoryItems/> */}
          {/* <Carriers/> */}
          {/* <LifecycleStatus /> */}
          {/* <Oem/> */}
          {/* <Plans/> */}
          {/* <Assets/> */}
          {/* <TableHead/> */}
          {/* <Trial /> */}

          {/* <Link to="/Oem">got to OEM </Link> */}

          <Route
            path="/CreateNewAssets"
            exact
            render={() => {
              return <CreateNewAssets />;
            }}
          />

          <Route
            path="/CreateCompany"
            exact
            render={() => {
              return <CreateCompany />;
            }}
          />

          {/* <Route path="/CreateNewContract" exact render={
            () => {
              return (<CreateNewContract />)
            }
          } /> */}

          <Route
            path="/NewContract"
            exact
            render={() => {
              return <NewContract />;
            }}
          />

          <Route
            path="/CreateEndUser"
            exact
            render={() => {
              return <CreateEndUser />;
            }}
          />

          <Route
            path="/Oem"
            exact
            render={() => {
              return <Oem />;
            }}
          />
          <Route
            path="/OperatingSystems"
            exact
            render={() => {
              return <OperatingSystems />;
            }}
          />

          <Route
            path="/Plans"
            exact
            render={() => {
              return <Plans />;
            }}
          />

          <Route
            path="/Test"
            exact
            render={() => {
              return <Test />;
            }}
          />

          <Route
            path="/FormFactors"
            exact
            render={() => {
              return <FormFactors />; //No link to fetch
            }}
          />
          <Route
            path="/InventoryItems"
            exact
            render={() => {
              return <InventoryItems />;
            }}
          />

          <Route
            path="/LifecycleStatus"
            exact
            render={() => {
              return <LifecycleStatus />;
            }}
          />

          <Route
            path="/DeviceCategories"
            exact
            render={() => {
              return <DeviceCategories />;
            }}
          />

          <Route
            path="/Carriers"
            exact
            render={() => {
              return <Carriers />;
            }}
          />

          <Route
            path="/Assets"
            exact
            render={() => {
              return <Assets />;
            }}
          />

          <Route
            path="/Colours"
            exact
            render={() => {
              return <Colours />;
            }}
          />

          <Route
            path="/Layout"
            exact
            render={() => {
              return <Layout />;
            }}
          />

          <Route
            path="/Random"
            exact
            render={() => {
              return <Random />;
            }}
          />
          <Route
            path="/CreateCompanyTest"
            exact
            render={() => {
              return <CreateCompanyTest />;
            }}
          />
        </div>
      </Router>
    );
  }
}

export default App;
