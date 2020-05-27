import React, { Component } from "react";
import CloudsMetric from "./CloudsMetric.jsx"

export default class Clouds extends Component {
    constructor(props,context) {
        super(props,context);
        this.state = {
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
        console.log("getDerivedStateFromProps")
        console.log(receivedProps)
        console.log(state)
        if (receivedProps) 
            {   let cloud=receivedProps[0] //todo current assumption is there will be only one name 
                console.log("getDerivedStateFromProps props recieved")
                console.log(cloud)
                return (
                    {name: cloud.name,
                    type:cloud.type,
                    tags:cloud.tags,
                    config: cloud.config,
                    metric:cloud.metric
                    }
                    )
            }
        // Return null if the state hasn't changed
        return null;
    }

    render() {
            const { name, type, tags, config, metric } = this.state
            console.log("In render")
            return (
                <div>
                    <h2 align="center">Clouds</h2>
                    <br />
                    <div>
                        <label>name : {name}</label><br />
                        <label>type : {JSON.stringify(type)}</label><br />
                        <label>tags : {JSON.stringify(tags)}</label><br />
                        <label>config : {JSON.stringify(config)}</label><br />
                        {/* <label>metric : {JSON.stringify(metric)}</label><br /> */}
                        <CloudsMetric dataFromClouds = {metric}/>
                    </div>
                </div>
            )
        }
    }