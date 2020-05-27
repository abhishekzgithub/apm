import React ,{Component} from "react";


export default class ApplicationEndpointsMetricPluginConfig extends Component{
    constructor(props)
    {
        super(props);
        this.state = {
            application_endpoints_metric_plugin_config:
            {
                ip: "ip",
                username : "username",
                password : "password",
                documentsTypes : []
            }
        }
    
    }

    render()
    {   const projects = this.props.dataFromProjectAttr
        console.log("ApplicationEndpointsMetricPluginConfig")
        console.log(projects)
        
        const {ip, username, password, documentsTypes} = this.state.application_endpoints_metric_plugin_config
        return(
            <div>
                <br/><br/>
                <h4 align="center">ApplicationEndpointsMetricPluginConfig</h4>
                <br/><br/>
                <div>
                    <label>IP : {ip}</label><br/><br/>
                    <label>username : {username}</label><br/><br/>
                    <label>password : {password}</label><br/><br/>
                    <label>documentsTypes : {JSON.stringify(documentsTypes)}</label><br/>
                </div>
            </div>
        )
    }
}