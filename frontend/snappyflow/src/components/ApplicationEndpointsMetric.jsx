import React ,{Component} from "react";

export default class ApplicationEndpointsMetric extends Component{
    constructor(props)
    {
        super(props);
        this.state = {
            application_endpoints_metric :[]
            // {
            //     plugin: "",
            //     enabled : "",
            //     interval : "",
            //     config : {}
            // },
        }
    
    }
    static getDerivedStateFromProps(props, state) 
    {
        let receivedProps=props.propFromAppEndPoints
        //debugger;
        //console.log("propFromApplication")
        //console.log(receivedProps)
        
        if (!( receivedProps.length === 0) && receivedProps.constructor === Array)
        {
            let metricList=receivedProps
            //console.log("Props received in application component")
            //console.log(metricList)
            metricList.map((metricItem,index)=>
            {   //console.log("metricItem")
                //console.log(metricItem)
                state.application_endpoints_metric.push(
                    [
                        {   index:index,
                            plugin: metricItem.plugin,
                            enabled : metricItem.enabled,
                            interval : metricItem.interval || 0,
                            config : metricItem.config || {}
                    }]
                )
                
            })
        }
        // Return null if the state hasn't changed
        return null;
    }

    render()
    {   //const metrics = this.props.propFromAppEndPoints
        //console.log("ApplicationEndpointsMetric")
        //console.log(metrics)       
        const {application_endpoints_metric} = this.state
        //console.log(application_endpoints_metric)
        const renderData=()=>{
            if (application_endpoints_metric.length !== 0)
            {
                //console.log(application_endpoints_metric)
                return(
                    <div>
                        {application_endpoints_metric.map((items,index)=>
                            items.map((endpt,ix)=>
                                {
                                    return(
                                        <ul key={endpt.index}>
                                        <li >plugin: {JSON.stringify(endpt.plugin)}</li>
                                        <li >enabled: {JSON.stringify(endpt.enabled)}</li>
                                        <li >interval: {JSON.stringify(endpt.interval)}</li>
                                        <li >config: {JSON.stringify(endpt.config)}</li><br/>
                                        </ul>
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
        
    return(
            <div>
                <h3 align="left">Application Endpoints Metric</h3>
                <div>
                    {(application_endpoints_metric.length!==0? renderData() : [])}
                </div>
            </div>
        )
    }
}