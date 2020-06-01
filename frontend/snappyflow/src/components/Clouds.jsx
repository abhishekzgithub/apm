import React, { Component } from "react";
import CloudsMetric from "./CloudsMetric.jsx"

export default class Clouds extends Component {
    constructor(props,context) {
        super(props,context);
        this.state = {
            modified : false,
            name: "",
            type: {},
            tags: {},
            config: {
                secretKey: "",
                accessKey: "",
                token: ""
            },
            metric: {},
        }
    }
    static getDerivedStateFromProps(props, state) 
    {
        let receivedProps=props.dataFromProjectAttr
        //console.log("getDerivedStateFromProps")
        //console.log(receivedProps)
        //console.log(state)
        
        if (receivedProps)
        {
            //debugger;
            //if (!state.modified)
            //{
                state.modified=true
                let cloud=receivedProps[0] //todo current assumption is there will be only one name 
                    //console.log("getDerivedStateFromProps props recieved")
                    //console.log(cloud)
                return (
                    {name: cloud.name,
                    type:cloud.type,
                    tags:cloud.tags,
                    config: cloud.config,
                    metric:cloud.metric
                    }
                    )
            }
            // else{
            //     return null;
            // }
        // Return null if the state hasn't changed
        return null;
    }

    render() {
            const { name, type, tags, config, metric } = this.state
            //console.log("In render")
            return (
                <div>
                    <h3 align="left">Clouds</h3>
                    <ul>
                        <li>name : {name}</li>
                        <li>type : {JSON.stringify(type)}</li>
                        <li>tags : {JSON.stringify(tags)}</li>
                        <li>config : {JSON.stringify(config)}</li>
                    </ul>
                    <div>
                    <CloudsMetric dataFromClouds = {metric}/>
                    </div>
                </div>
            )
        }
    }