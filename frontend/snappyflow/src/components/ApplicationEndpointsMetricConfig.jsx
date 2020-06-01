import React ,{Component} from "react";

export default class ApplicationEndpointsMetricConfig extends Component{
    constructor(props)
    {
        super(props);
        this.state = {
            application_endpoints_metric_config :{}
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
        let receivedProps=props.propFromAppEndPointsMetric
        //debugger;
        //console.log("propFromAppEndPointsMetric")
        //console.log(receivedProps)
        
        if (!( Object.keys(receivedProps).length === 0) && receivedProps.constructor === Object)
        {
            let metricConfigObject=receivedProps
            //console.log("Props received in application propFromAppEndPointsMetric")
            //console.log(metricConfigObject)
            return (
                    state.application_endpoints_metric_config = metricConfigObject
            )
            // metricList.map((metricItem,index)=>
            // {   //console.log("metricItem")
            //     //console.log(metricItem)
            //     state.application_endpoints_metric_config.push(
            //         [
            //             {   index:index,
            //                 plugin: metricItem.plugin,
            //                 enabled : metricItem.enabled,
            //                 interval : metricItem.interval || 0,
            //                 config : metricItem.config || {}
            //         }]
            //     )
                
            // })
        }
        // Return null if the state hasn't changed
        return null;
    }

    render()
    {   //const metrics = this.props.propFromAppEndPoints
        //console.log("ApplicationEndpointsMetricConfig")
        //console.log(metrics)       
        const {application_endpoints_metric_config} = this.state
        //console.log(application_endpoints_metric_config)
        const displayArray=(arr)=>{
            return(
                <ul>
                    {arr.map((item,index)=>
                        <li key={index}>{item}</li>)}
                </ul>
            )
        }
        const renderData=()=>{
            if (Object.keys(application_endpoints_metric_config).length !== 0)
            {
                //debugger;
                //console.log("ApplicationEndpointsMetricConfig")
                //console.log(application_endpoints_metric_config)
                
                return(
                    <div>
                        {Object.keys(application_endpoints_metric_config).map((key,ix)=>
                            <ul key={"application_endpoints_metric_config"+ix}>
                                <li >{key}: {(application_endpoints_metric_config[key].constructor !== Array?application_endpoints_metric_config[key]:displayArray(application_endpoints_metric_config[key]))}</li>
                            </ul>
                        )
                        }
                    </div>
                )}
            else
            {return null;
            }}
        
    return(
            <div>
                <div>
                    {renderData()}<br/>
                </div>
                <div align="right">
                        <button type="submit">Add</button>
                        <button type="submit">Edit</button>
                        <button type="submit">Delete</button>
                        <button type="submit">Save</button>
                    </div>
            </div>
        )
    }
}