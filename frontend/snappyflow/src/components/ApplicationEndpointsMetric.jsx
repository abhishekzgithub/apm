import React ,{Component} from "react";
import ApplicationEndpointsMetricConfig from "./ApplicationEndpointsMetricConfig"

export default class ApplicationEndpointsMetric extends Component{
    constructor(props)
    {
        super(props);
        this.state = {
            modified : false,
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
            if (!state.modified){
                state.modified=true
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
        }}
        // Return null if the state hasn't changed
        return null;
    }

    onFormSubmit=(data)=>{
        this.setState({
            application_endpoints_metric:data
        })
    }

    updateConfigState=(data)=>{
        console.log("config updated")
        console.log("application_endpoints_metric")
        console.log(data)
        let old_application_endpoints_metric=this.state.application_endpoints_metric
        old_application_endpoints_metric.config=data
        this.setState({
            application_endpoints_metric:old_application_endpoints_metric
        })
        this.props.updateMetricState(this.state.application_endpoints_metric)
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
                                <div key={endpt.index}>
                                    <ul key={endpt.index}>
                                        <li >plugin: {JSON.stringify(endpt.plugin)}</li>
                                        <li >enabled: {JSON.stringify(endpt.enabled)}</li>
                                        <li >interval: {JSON.stringify(endpt.interval)}</li>
                                        <li >
                                        config: {((endpt.config)?(<ApplicationEndpointsMetricConfig updateConfigState={this.updateConfigState}  propFromAppEndPointsMetric = {endpt.config}/>): {})}
                                        </li>
                                        <br/>
                                    </ul>
                                </div>
                                    )}))}
                    </div>
                )}
            else
            {return null;
            }}
        
    return(
            <div>
                <h4 align="left">Application Endpoint's Metric:</h4>
                <div>
                    {(application_endpoints_metric.length!==0? renderData() : [])}
                </div>
                
            </div>
        )
    }
}