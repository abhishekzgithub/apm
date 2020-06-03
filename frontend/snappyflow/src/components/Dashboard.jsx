import React from "react";

import ProjectAttributes from "./ProjectAttributes"

const axios=require("axios")

class Dashboard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            clouds : "",
            heartbeat_interval : "",
            key : "",
            projects : ""  
        };
    }

    getYaml=()=> {
        let request_option={
            url: "http://127.0.0.1:8000/api/apm/",
        };
        var self=this
        axios.get(request_option.url)
                    .then(
                        function(response){
                        //console.log(response.data)
                        self.setState(
                            {clouds: response.data.clouds,
                            heartbeat_interval: response.data.heartbeat_interval
                            ,key:response.data.key
                            ,projects : response.data.projects
                                })
                        })
                        .catch(error =>{
                            console.log(error)
                        });
                    }

   componentDidMount(){
       this.getYaml()
    }
    onFormSubmit=(data)=>{
        this.setState({
            clouds : data.clouds,
            heartbeat_interval : data.heartbeat_interval,
            key : data.key,
            projects : data.projects 
        })
    }
    render(){
        // const {clouds, heartbeat_interval, key, projects} = this.state
        return(
            <div>
                <h1 align="center">SF Poller Configuration</h1>
                <ProjectAttributes dataFromDashboard = {this.state} callbackFunction = {this.onFormSubmit}/>
            </div>
        )
    }};

export default Dashboard;