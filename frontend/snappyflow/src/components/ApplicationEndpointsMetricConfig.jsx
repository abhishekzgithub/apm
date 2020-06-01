import React ,{Component} from "react";

export default class ApplicationEndpointsMetricConfig extends Component{
    constructor(props)
    {
        super(props);
        this.state = {
            modified: false,
            application_endpoints_metric_config:{}

        }
        //this.addConfig=this.addConfig.bind(this)
    }
    static getDerivedStateFromProps(props, state) 
    {
        let receivedProps=props.propFromAppEndPointsMetric
        //debugger;
        //console.log(" here propFromAppEndPointsMetric")
        //console.log(receivedProps)
        
        if (!( Object.keys(receivedProps).length === 0) && receivedProps.constructor === Object)
        {
            let metricConfigObject=receivedProps
            //console.log("Props received in application propFromAppEndPointsMetric")
            //console.log(metricConfigObject)
            if (! (state.modified)){//!=metricConfigObject.username){
                //console.log(" propFromAppEndPointsMetric updated")
                //console.log(state)
                return (
                    state.application_endpoints_metric_config = metricConfigObject,
                    state.modified = true
            )
            }
            else{
                return null;
            }
        }
        // Return null if the state hasn't changed
        return null;
    }


    addConfig=(event)=>{

        let self=this
        event.preventDefault();
        //console.log(event.target.value)
        //console.log("pre state values")
        let old_application_endpoints_metric_config=self.state.application_endpoints_metric_config
        old_application_endpoints_metric_config.password=event.target.value
        //console.log(self.state.application_endpoints_metric_config)
        self.setState({
            application_endpoints_metric_config:old_application_endpoints_metric_config
        })
        //console.log("post state values")
        //console.log(self.state.application_endpoints_metric_config)

    }
    editConfig=()=>{
        console.log("edit button clicked")
    }
    deleteConfig=()=>{
        console.log("delete button clicked")
    }
    saveConfig=()=>{
        console.log("save button clicked")
    }
    onSubmit = (event)=>{
        console.log("change text")
        event.persist()
        console.log(event)
        console.log(event.target.value)
    }


    render()
    {   //const metrics = this.props.propFromAppEndPoints
        //console.log("ApplicationEndpointsMetricConfig")
        //console.log(metrics)
        //console.log("State")       
        //console.log(this.state)
        const {application_endpoints_metric_config} = this.state
        //console.log("app")
        //console.log(application_endpoints_metric_config)
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
                        <div align="right">
                            <input type="text" id="key1"  onChange={this.addConfig}/>
                            {this.state.username}
                            {/* <input type="text" id="value1" onChange ={this.addConfig}/> */}
                            <button type="submit" onClick={this.addConfig}>Add</button>
                            <button type="submit" onClick={this.editConfig}>Edit</button>
                            <button type="submit" onClick={this.deleteConfig}>Delete</button>
                            <button type="submit"onClick={this.saveConfig}>Save</button>
                        </div>
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

            </div>
        )
    }
}