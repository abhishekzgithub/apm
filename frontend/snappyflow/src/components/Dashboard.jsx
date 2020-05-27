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
        this.getYaml=this.getYaml.bind(this);
        this.readAwsDetails=this.readAwsDetails.bind(this);
        this.displayProjectList=this.displayProjectList.bind(this);
        this.readClouds=this.readClouds.bind(this);
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
    addProject=()=>
    {

    }
    deleteProject=()=>
    {

    }
   
   readAwsDetails=(awsDetails)=>
   {
    var accessKey=""
    var secretKey = ""
    if (typeof awsDetails!=='undefined')
        {
            //console.log("Awsdetails")
            accessKey=awsDetails.accessKey
            secretKey=awsDetails.secretKey
        }
    return (
        <div>
            <h4 align="centre">awsDetails</h4>
            <label>secretKey: {secretKey}</label><br/><br/>
            <label>accessKey: {accessKey}</label><br/>
            
        </div>)
   }

   readClouds=(state)=>{
       //console.log("Updated")
   }
   displayProjectList=(projects)=>{

   }
   displayEndPoints=(endpoint)=>{

   }
   displayEndpointType=(endpoint)=>{

   }

   componentDidMount(){
       this.getYaml()
       this.readAwsDetails()
}
    render(){
        const {clouds, heartbeat_interval, key, projects} = this.state
        return(
            <div>
                <h1 align="center">Dashboard</h1>
                    <label>key : {key}</label><br/>
                    <label>heartbeat_interval: {heartbeat_interval}</label><br/><br/>
                    <label>projects:</label><br/>
                    {this.readAwsDetails(projects.awsDetails)}
                    {this.readClouds(clouds)}
                    <ProjectAttributes dataFromDashboard = {this.state}/>
            </div>

            
        )
    }};

export default Dashboard;