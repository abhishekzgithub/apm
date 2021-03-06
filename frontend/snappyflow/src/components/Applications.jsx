import React ,{Component} from "react";
import ApplicationEndpoints from "./ApplicationEndpoints"

export default class Applications extends Component{
    constructor(props)
    {
        super(props);
        this.state = {
            projectList : [],
            modified: false
        }
    
    }

    static getDerivedStateFromProps(props, state) 
    {
        let receivedProps=props.dataFromProjectAttr
        //console.log("dataFromProjectAttr")
        //console.log(receivedProps)
        if (Boolean(receivedProps))// && Object.keys(receivedProps).length === 0 && receivedProps.constructor === Object)
        {
            if (!state.modified){
                state.modified=true
            let projectList=receivedProps.projectList
            //console.log("Props received in application component")
            //console.log(projectList)
            projectList.map((project,index)=>
            {
                //console.log(project.name)
                project.applications.map((app,ix)=>{
                    //console.log(app.name)
                    state.projectList.push([
                        {index : ix,
                         name : project.name,
                         applications : app.name ,
                         endpoints : app.endpoints}
                    ])
            })
            })
        }}
        // Return null if the state hasn't changed
        return null;
    }

    onFormSubmit=(data)=>{
        this.setState({
            projectList:data
        })
    }

    render()
    {   //const projects = this.props.dataFromProjectAttr
        let {projectList} = this.state
        //console.log("Applications")
        //console.log(projectList)
        //debugger;
        //const {name, endpoints} = this.state//.applications

///////////////////////////////////////////////////////

        const renderData=()=>{
            if (projectList.length !== 0)
            {
                //console.log(projectList)
                return(
                    <div >
                        {projectList.map((items,index)=>
                            items.map((endpt,ix)=>
                                {
                                    return(
                                        <div key={endpt.index}>
                                            <h3 align="left">Project: </h3>
                                            <ul key={endpt.index}>
                                                <li > Project name: {endpt.name}</li>
                                                <li > Application name: {endpt.applications}</li>
                                                <ApplicationEndpoints propFromApplication = {(projectList && projectList.length!=0) ? projectList[0][0].endpoints : []}/>
                                            </ul>
                                        </div>
                                    )}))}
                    </div>)}
            else
            {
                return null;
            }
        }

///////////////////////////////////////////////////////
        return(
            <div>
                <div>
                    
                </div>
                <div>
                {(projectList && projectList.length!=0) ? renderData() : []}
                </div>
                {/* <div>
                    <ApplicationEndpoints propFromApplication = {(projectList && projectList.length!=0) ? projectList[0][0].endpoints : []}/>
                </div> */}
            </div>
        )
    }
}