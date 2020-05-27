import React ,{Component} from "react";
import ApplicationEndpoints from "./ApplicationEndpoints"

export default class Applications extends Component{
    constructor(props)
    {
        super(props);
        this.state = {
            projectList : [],
        }
    
    }

    static getDerivedStateFromProps(props, state) 
    {
        let receivedProps=props.dataFromProjectAttr
        //console.log("dataFromProjectAttr")
        //console.log(receivedProps)
        if (Boolean(receivedProps))// && Object.keys(receivedProps).length === 0 && receivedProps.constructor === Object)
        {
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
        }
        // Return null if the state hasn't changed
        return null;
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
                                        <ul key={ix}>
                                        <li > name: {JSON.stringify(endpt.name)}</li>
                                        <li > applications: {JSON.stringify(endpt.applications)}</li>
                                        {/* <li key={Math.random().toString(36).substr(2, 9)}>endpoints: {JSON.stringify(endpt.endpoints)}</li> */}
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

///////////////////////////////////////////////////////


        return(
            <div>
                <br/>
                <h2 align="center">Applications</h2>
                <br/>
                <label>(applications)</label>
                {/* <div>
                    <label>project : {JSON.stringify(projectList)}</label><br/>
                </div> */}
                <div>
                {(projectList && projectList.length!=0) ? renderData() : []}
                </div>
                <div>
                    <ApplicationEndpoints propFromApplication = {(projectList && projectList.length!=0) ? projectList[0][0].endpoints : []}/>
                </div>
            </div>
        )
    }
}