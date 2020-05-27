import React ,{Component} from "react";

import Applications from "./Applications"
import Clouds from "./Clouds"

export default class ProjectAttributes extends Component{
    constructor(props)
    {
        super(props);
    }
    
    render()
    {
        let {clouds, heartbeat_interval, key, projects} = this.props.dataFromDashboard
        //console.log("dataFromDashboard")
        //console.log(projects)
        return(
            <div>
                <h2 align="left">Controller Global Settings</h2>
                <div>
                    <label>key: {key || ""}</label><br/>
                    <label>heartbeat_interval: {heartbeat_interval || ""}</label><br/>
                </div>
                <div>
                    <h2 align="left">Projects</h2>
                </div>
                <div>
                    <h3>Global Settings</h3>
                    <label>awsDetails:</label>
                    <ul>
                        <li>secretKey: {(projects && (typeof projects!=='undefined')) ? projects.awsDetails.secretKey :""} </li>
                        <li>accessKey: {(projects && (typeof projects!=='undefined')) ? projects.awsDetails.accessKey :""}</li>
                    </ul>
                </div>
                <div>
                    <Applications dataFromProjectAttr = {projects}/>
                 </div>
                 <div>
                     <Clouds dataFromProjectAttr= {clouds}/>
                 </div>
            </div>
            
        )
    }
}