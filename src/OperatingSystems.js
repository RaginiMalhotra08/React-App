import React, { Component } from 'react';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
// import React from 'react';
import SplitterLayout from 'react-splitter-layout';
import OperatingSystemsList from './OperatingSystemsList';


class OperatingSystems extends Component {
    render() {
        return (

            <SplitterLayout>
                <div>
                <legend>Operating Systems</legend>
                    <form>
                        <input list="browsers" />
                        <datalist id="browsers">
                            <option value="iOS" />
                            <option value="Windows" />
                            <option value="Symbian" />
                        </datalist>
                        {/* <hr/>
                        <label className="textlabel" htmlFor="countryInput">Operating Systems:</label>
                                <select>
                                    <option value="volvo">iOS</option>
                                    <option value="saab">Windows</option>
                                    <option value="opel">Symbian</option>
                                </select> */}
                    </form>
                </div>
                <div>
                    <OperatingSystemsList />
                </div>

            </SplitterLayout>
        );
    }
}

export default OperatingSystems;