import React ,{Component} from "react";
import ApplicationEndpointsMetric from "./ApplicationEndpointsMetric"

export default class ApplicationEndpoints extends Component{
    constructor(props)
    {
        super(props);
        this.state = {
            modified : false,
            application_endpoints : [],
            // {
            //     name : "",
            //     endpoint_type : "",
            //     config : {},
            //     tags : {},
            //     metric : {}
            // },
        }
    
    }

    static getDerivedStateFromProps(props, state) 
    {
        let receivedProps=props.propFromApplication
        //debugger;
        //console.log("propFromApplication")
        //console.log(receivedProps)
        
        if (!( receivedProps.length === 0) && receivedProps.constructor === Array)
        {
            if (!state.modified){
                state.modified=true
            let projectList=receivedProps
            //console.log("Props received in application component")
            //console.log(projectList)
            projectList.map((endpoint,index)=>
            {   //console.log("endpoint")
                //console.log(endpoint)
                state.application_endpoints.push(
                    [
                        {"index":index,
                        "name": endpoint.name,
                        "endpoint_type":endpoint.endpoint_type,
                        "config":endpoint.config,
                        "tags":endpoint.tags,
                        "metric": endpoint.metric}
                    ]
                )
                
            })
        }}
        // Return null if the state hasn't changed
        return null;
    }

    // onFormSubmit=(data)=>{
    //     this.setState({
    //         application_endpoints:data
    //     })
    // }


    updateMetricState=(data)=>{
        console.log("config updated")
        console.log("application_endpoints")
        console.log(data)
        console.log(this.state.application_endpoints)
        //let old_application_endpoints_metric=this.state.application_endpoints
        // old_application_endpoints_metric.config=data
        // this.setState({
        //     application_endpoints_metric:old_application_endpoints_metric
        // })
    }

    render()
    {   //const endpoints = this.props.propFromApplication

        //console.log("ApplicationEndpoints")
        //console.log(endpoints)
        //const {name, endpoint_type, config, tags, metric} = this.state.application_endpoints
        let {application_endpoints} = this.state
        //console.log("application_endpoints")
        //console.log(application_endpoints)
        //debugger;
        ///////////////////////////////////////////////////////

        const renderData=()=>{
            if (application_endpoints.length !== 0)
            {
                //console.log(application_endpoints)
                return(
                    <div>
                        {application_endpoints.map((items,index)=>
                            items.map((endpt,ix)=>
                                {
                                    return(
                                        <div key={endpt.index}>
                                            <h3 align="left">Application Endpoint: </h3>
                                            <ul key={endpt.index}>
                                                <li > name: {JSON.stringify(endpt.name)}</li>
                                                <li > endpoint_type: {JSON.stringify(endpt.endpoint_type)}</li>
                                                <li > config: {JSON.stringify(endpt.config)}</li>
                                                <li > tags: {JSON.stringify(endpt.tags)}</li><br/>
                    <div>
                    <ApplicationEndpointsMetric updateMetricState= {this.updateMetricState} propFromAppEndPoints = {application_endpoints[0][0].metric}/>
                    </div>
                                            </ul>
                                        </div>
                                    )
                                }
                                )
                            )}
                        
                    </div>
                )
                
            }
            else
            {
                return null;
            }
        }

        ///////////////////////////////////////////////////////
        return(
            <div>
                
                <div>
                {(application_endpoints && application_endpoints.length!=0) ? renderData() : []}
                </div>
                {/* <div>
                    <ApplicationEndpointsMetric 
                    propFromAppEndPoints = {(application_endpoints && application_endpoints.length!=0) ? application_endpoints[0][0].metric : []}/>
                </div> */}
            </div>
        )
    }
}