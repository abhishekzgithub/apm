import React ,{Component} from "react";

export default class ApplicationEndpointsMetricConfig extends Component{
    constructor(props)
    {
        super(props);
        this.state = {
            modified: false,
            editOp: false,
            addOp: false,
            deleteOp:false,
            disableState:true,
            application_endpoints_metric_config:{},

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

    disableState=()=>{
        if (!disableState){
            return "disabled"
        }
        else{
            return "enabled"
        }
        
    }
     onChangeVal=(event)=>{
        let self=this
        event.preventDefault();
        console.log(event.target)
        //console.log("pre state values")
        //let element;
        //element=event.target.id
        let old_application_endpoints_metric_config=self.state.application_endpoints_metric_config
        old_application_endpoints_metric_config[event.target.id]=event.target.value
        //console.log(self.state.application_endpoints_metric_config)
        self.setState({
            application_endpoints_metric_config:old_application_endpoints_metric_config
        })
        //console.log("post state values")
        //console.log(self.state.application_endpoints_metric_config)

    }
    addConfig=(event)=>{

        // let self=this
        // event.preventDefault();
        // //console.log(event.target.value)
        // //console.log("pre state values")
        // let old_application_endpoints_metric_config=self.state.application_endpoints_metric_config
        // old_application_endpoints_metric_config.password=event.target.value
        // //console.log(self.state.application_endpoints_metric_config)
        // self.setState({
        //     application_endpoints_metric_config:old_application_endpoints_metric_config
        // })
        //console.log("post state values")
        //console.log(self.state.application_endpoints_metric_config)

    }
    deleteConfig=(event)=>{
        console.log(event.target)
        // let self=this
        // event.preventDefault();
        // console.log(event.target)
        // //console.log("pre state values")
        // let old_application_endpoints_metric_config=self.state.application_endpoints_metric_config
        // delete old_application_endpoints_metric_config[event.target.id]; //=event.target.value
        // //console.log(self.state.application_endpoints_metric_config)
        // self.setState({
        //     application_endpoints_metric_config:old_application_endpoints_metric_config
        // })
        //console.log("post state values")
        //console.log(self.state.application_endpoints_metric_config)

    }
    // saveConfig=(event)=>{
    //     // event.preventDefault();
    //     // console.log("save button clicked")
    //     // console.log(event.target)
    // }
    // onSubmit = (event)=>{
    //     event.preventDefault();
    //     console.log("change text")
    //     event.persist()
    //     //console.log(event)
    //     console.log(event.target)
    // }
    onFormSubmit=(event)=>{
        // this.setState({
        //     application_endpoints_metric_config:data
        // })
        event.preventDefault();
        console.log('application_endpoints_metric_config')
        console.log("form submitted and callback props pushed")
        console.log(this.state.application_endpoints_metric_config)
        this.props.updateConfigState(this.state.application_endpoints_metric_config)
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
                        {/* <input  type="submit" id="add" form="form-metric-config"  onClick={this.addConfig} value="Add"  /> */}
                        {/* Add</input> */}
                        <input  type="submit" id="submit" form="form-metric-config" onClick={this.onFormSubmit} value="Submit"  />
                        <form id="form-metric-config" onSubmit={this.onSubmit} >
                                {Object.keys(application_endpoints_metric_config).map((key,ix)=>
                                    <div key={"application_endpoints_metric_config"+ix}>
                                        <label>{key}: </label>
                                        <input id={key} type="text" name={key} value = {application_endpoints_metric_config[key]} onChange={this.onChangeVal}/>
                                        {/* <li >{key}: {(application_endpoints_metric_config[key].constructor !== Array?application_endpoints_metric_config[key]:displayArray(application_endpoints_metric_config[key]))}</li> */}
                                        {/* <div align="right"> */}
                                <input type="submit" id="edit" form="form-metric-config"   onClick={this.editConfig} value="Edit" />
                                <input type="submit" id="delete" form="form-metric-config" onClick={this.deleteConfig} value="Delete" />
                            </div>)}
                        </form>
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