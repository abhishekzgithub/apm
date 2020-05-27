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
        console.log("dataFromClouds")
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
    // todo
    // this will be a nested map which needs to be handled
    // getPlugin=()=>{
    //     return(
    //         <div>
    //             <ul>
    //                 {
    //                     this.state.clouds_metric.map(item=>{
    //                         <li>{item.plugin}</li>
    //                     })
    //                 }
    //             </ul>
    //         </div>
    //     )
    // }
    addPlugin=(clouds_metric)=>{
        if (clouds_metric.length!=0){
            console.log("add plugin")
            console.log(clouds_metric)
        }
        else{
            return null;
        }
    }
    updatePlugin=(clouds_metric)=>{
        if (clouds_metric.length!=0){
            console.log("add plugin")
            console.log(clouds_metric)
        }
        else{
            return null;
        }
    }
    deletePlugin = (clouds_metric,index) =>
    {
        if (clouds_metric.length!=0){
            //let { clouds }=this.state.clouds_metric
            console.log("deletePlugin")
            console.log(clouds_metric)
            console.log(index)
            clouds_metric.map((item,index)=>
                {
                    item.map((nestedItem,index)=>{
                        console.log("nested item")
                        console.log(nestedItem)
                    })
                })
        }
        else
        {
            return null;
        }
        
    }

    render()
    {   let {clouds_metric} = this.state
        console.log("In cloud metric")
        const renderData=()=>{
            if (clouds_metric.length !== 0)
            {
                console.log(clouds_metric)
                return(
                    <div >
                        {clouds_metric.map((items,index)=>
                            items.map((endpt,ix)=>
                                {
                                    return(
                                        <ul>
                                        <li key={Math.random().toString(36).substr(2, 9)}>plugin: {JSON.stringify(endpt.plugin)}</li>
                                        <li key={Math.random().toString(36).substr(2, 9)}>enabled: {JSON.stringify(endpt.enabled)}</li>
                                        <li key={Math.random().toString(36).substr(2, 9)}>interval: {JSON.stringify(endpt.interval)}</li>
                                        <li key={Math.random().toString(36).substr(2, 9)}>config: {JSON.stringify(endpt.config)}</li>
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