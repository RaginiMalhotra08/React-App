import React from 'react';

// This is a sample for POST method. Onle refer this, DO NOT make any changes to this page.
//This page is disabled in the main application as NewContract.js is having POST method for this page.




class CreateNewContract extends React.Component {   
    constructor(){
        super();
      this.state = {}
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);             
    }   
    
    handleChange (event) {
        this.setState({ [event.target.name]: event.target.value });
    }
    handleSubmit(event) {
        event.preventDefault();
      fetch("https://versergateway.com.au/VerserAssetLeasingServices/NewContract/CreateNewContract",
            {
                method: 'POST',                                             
                cache: 'no-cache',
                headers:{        
                    'Accept': 'application/json',
                    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',                
                    'Content-Type': 'application/json'
                    
                },                
                body: JSON.stringify(this.state)
            })
            .then((resp) => resp.json())
            .then(function(response) {
                console.info('fetch()', response);
                return response;
            });
    }
    render() {
        return (
            <div>
                <h2>Create New Contract </h2>
                <form id="submit_job" onSubmit={this.handleSubmit} onChange={this.handleChange}>
                    <label>
                    StartDate:  </label>
                        <input type="date" name="StartDate" />
                   
                    <br/>
                    <label>
                    EndDate: </label>
                        <input type="date" name="EndDate" />
                    
                    <br/>
                    <label>
                    ServiceNo: </label>
                        <input type="text" name="ServiceNo" />                  
                   
                   <br/>
                        <label>
                        Contract_Company:
                    <input type="text" name="Contract_Company" />
                 </label>
                 <br/>
               <label>
               Contract_EndUser:
                    <input type="text" name="Contract_EndUser"/>
               </label>
               <br/>
               <label>
               Contract_Plan:
                    <input type="text" name="Contract_Plan" />
                </label>                
                <br/>
                    <br/>
                    <button type="submit">Submit</button>
                </form>
            </div>

        );
    }
}
export default CreateNewContract;
