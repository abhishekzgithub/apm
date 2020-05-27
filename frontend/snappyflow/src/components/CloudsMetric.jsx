import React ,{Component} from "react";

export default class CloudsMetric extends Component{
    constructor(props)
    {
        super(props);
        this.state = {
                clouds_metric : []
        }
    }

    static getDerivedStateFromProps(props, state) 
    {
        let receivedProps=props.dataFromClouds
        //console.log("dataFromClouds")
        //console.log(receivedProps)
        //console.log(state)
        if (!(Object.keys(receivedProps).length === 0 && receivedProps.constructor === Object)) 
        {
            //debugger;
            //console.log("Props received in cloud metrics")
            //console.log(receivedProps)
            receivedProps.map((prop,index)=>{
                //console.log("index")
                //console.log(index)
                state.clouds_metric.push([
                    {"index": index,
                    "plugin":prop.plugin || "",
                    "enabled":prop.enabled || false,
                    "interval" : prop.interval || 0,
                    "config" : prop.config || {}}
                ])
            })
        }
        // Return null if the state hasn't changed
        return null;
    }

    render()
    {   let {clouds_metric} = this.state
        //console.log("In cloud metric")
        const renderData=()=>{
            if (clouds_metric.length !== 0)
            {
                //console.log(clouds_metric)
                return(
                    <div >
                        {clouds_metric.map((items,index)=>
                            items.map((endpt,ix)=>
                                {
                                    return(
                                        <ul key={ix}>
                                        <li >plugin: {JSON.stringify(endpt.plugin)}</li>
                                        <li >enabled: {JSON.stringify(endpt.enabled)}</li>
                                        <li >interval: {JSON.stringify(endpt.interval)}</li>
                                        <li >config: {JSON.stringify(endpt.config)}</li>
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
        //debugger;
        return(
            <div>
                <h2 align="center">CloudsMetric</h2>
                <br/>
                <div>
                    {/* <label>clouds_metric : {JSON.stringify(clouds_metric)}</label><br/> */}
                    <label>metric </label><br/>
                    {(clouds_metric.length!==0? renderData() : [])}
                    <button onClick={this.addPlugin}>Add</button>
                    <button onClick={this.updatePlugin}>Edit</button>
                    <button onClick={this.deletePlugin}>Delete</button>
                </div>
            </div>
        )
    }
}