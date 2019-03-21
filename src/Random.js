
import React, { Component } from 'react';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
// import React from 'react';
import SplitterLayout from 'react-splitter-layout';



class Random extends Component {

    render() {
        return (
            <SplitterLayout >
                <SplitterLayout secondaryInitialSize={250}>
                    <SplitterLayout vertical secondaryInitialSize={700}>
                        <div>Test 1</div>
                        <SplitterLayout>
                            <div>Test 2</div>
                        </SplitterLayout>
                    </SplitterLayout>

                </SplitterLayout>
                <SplitterLayout primaryIndex={1} secondaryInitialSize={250}>
                    <div>This is a sample text which consists of no data from other components</div>

                </SplitterLayout>
            </SplitterLayout>
        );
    }
}

export default Random;