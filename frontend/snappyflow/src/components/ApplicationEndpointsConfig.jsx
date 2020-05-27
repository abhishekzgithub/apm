import React ,{Component} from "react";

export default class ApplicationEndpointsConfig extends Component{
    constructor(props)
    {
        super(props);
        this.state = {
            application_endpoints_config : 
            {
                region : "",
                instanceName :""
            },
        }
    
    }

    render()
    {   const projects = this.props.dataFromProjectAttr
        console.log("ApplicationEndpointsConfig")
        console.log(projects)
        
        const {region, instanceName} = this.state.application_endpoints_config
        return(
            <div>
                <br/><br/>
                <h2 align="center">ApplicationEndpointsConfig</h2>
                <br/><br/>
                <div>
                    <label>region : {region}</label><br/><br/>
                    <label>instanceName : {instanceName}</label><br/><br/>
                    
                </div>
            </div>
        )
    }
}