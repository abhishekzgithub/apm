import React ,{Component} from "react";

import Applications from "./Applications"

//import ApplicationEndpointsConfig from "./ApplicationEndpointsConfig"
//import ApplicationEndpointsMetric from "./ApplicationEndpointsMetric"
//import ApplicationEndpointsMetricPluginConfig from "./ApplicationEndpointsMetricPluginConfig"
import Clouds from "./Clouds"
export default class ProjectAttributes extends Component{
    constructor(props)
    {
        super(props);
        this.state = {
            name : "",
            applications : 
            {
                name : "",  
                endpoints : {}
            },
            application_endpoints : 
            {
                name : "",
                endpoint_type : "",
                config : {},
                tags : {},
                metric : {}
            },
            application_endpoints_config : 
            {
                region : "",
                instanceName :""
            },
            application_endpoints_metric :
            {
                plugin: "",
                enabled : "",
                interval : "",
                config : {}
            },
            application_endpoints_metric_plugin_config:
            {
                ip: "",
                username : "",
                password : "",
                documentsTypes : []
            }
        }
    }
    
    render()
    {
        let {clouds, heartbeat_interval, key, projects} = this.props.dataFromDashboard
        //console.log("dataFromDashboard")
        //console.log(projects)
        return(
            <div>
                <h2 align="center">ProjectAttributes</h2>
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