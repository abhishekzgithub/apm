import React from "react";
import {generateKey} from "./../utilities/uniqueKey"

export default class AddProject extends React.Component{
    constructor(props){
        super(props);
        this.state={
            key: "key",
            projects: [],
            projectName: "",
            applicationName: "",
            application:[{
                projectName: "",
                uniqueKey: "",
                applicationName : ""
                }
            ],
            endpointName:"",
            endpointDetails:[{
                projectName: "",
                uniqueKey: "",
                applicationName : "",
                endpointName : ""}],
            responseJson:
            [
                {projectName: "",
                uniqueKey : "",
                applications : 
                        [
                            {applicationName : "",
                            uniqueKey: "",
                            endpoints : 
                                    [
                                        {
                                            uniqueKey : "",
                                            endpointName: "",
                                            metric :
                                            [
                                                {
                                                    uniqueKey : "",
                                                    metricName: "",
                                                }
                                            ]
                                        }
                                    ]
                            
                            }
                        ],
                    
                }
            ]
        }}
    handleSubmit=(event)=>{   
        event.preventDefault();
        //console.log("handlesubmit")
    }
    addProject=(event)=>{
        const new_project=this.state.projectName
        this.setState((prevState)=>(prevState.projects.push(new_project)))
        let old_state=this.state
        let new_state;
        old_state.responseJson[0].projectName=new_project
        // this.setState((prevState)=>
        //     prevState.responseJson.push({"projectName":new_project})
        // )
    }
    handleProjectname=(event)=>{
        this.setState({
            projectName:event.target.value
        })
    }
    projectElement=()=>{
        return(
            <>
                <label>Project:</label>
                <input type="text" value={this.state.projectName} onChange={this.handleProjectname}/>
                <input type="submit" value="Add Project" onClick={this.addProject}/>
            </>
        )
    }
    handleApplication=(event)=>{
        this.setState({
            applicationName:event.target.value
        })
    }

    addApplication=(event)=>{
        // const new_app={"applicationName":this.state.applicationName}
        // const var_responseJson=this.state.responseJson
        // const filtered_project=var_responseJson.filter((item)=>{
        //     return item.projectName==event.target.name
        // })
        // filtered_project.applications.ps
        // this.setState((prevState)=>{
        //     responseJson:
        // })
        const new_app=this.state.applicationName
        const appDetails={
            projectName: event.target.name,
            uniqueKey: event.target.id,
            applicationName : new_app
            }
        this.setState((prevState)=>(prevState.application.push(appDetails)))

    }

    displayProjects=()=>
    {
        let {projects} = this.state
        //console.log(projects)
        return(
            projects.map((item,index)=>
                <div key={index}><br/>
                    <input type="button" name={item} key={index} value={item}/>
                    <input type="text"  value={this.state.applicationName} onChange={this.handleApplication}/>
                    <input type="button" id={generateKey(item)} name = {item} value="Add Applications" onClick={this.addApplication}/>
                    {this.displayApplication(item)}
                </div>
        ))
    }


    handleEndpointName=(event)=>{
        let {name,value}=event.target
        // let endpointname//={event.target.name:event.target.value}
        // endpointname={name:value}
        this.setState({
            endpointName: value,
            applicationName : name
        })
    }
    addEndpointName=(event)=>{
        let {id,name} = event.target //name is project name
        
        const endpointDetails={
            projectName: name,
            uniqueKey: id,
            applicationName : this.state.applicationName,
            endpointName : this.state.endpointName,
            }
        this.setState((prevState)=>(prevState.endpointDetails.push(endpointDetails)))

    }


    displayApplication=(projectNamevar)=>
    {
        const projectname = projectNamevar
        let application = this.state.application
        //
        if (application.length>0)
        {
            application=application.slice(1,)
            // console.log(application)
            // console.log("projectname")
            //console.log(projectname)
            const filtered_app=application.filter((item)=>{
                return item.projectName==projectname
            })
            // console.log("filtered app is")
            // console.log(filtered_app)
            return(
                <>{
                    filtered_app.map((ele)=>{
                        console.log("project name")
                        console.log(ele.projectName)
                    return(
                        <div key={ele.uniqueKey}>
                            <label>Applications are</label>
                            <label>{ele.applicationName}</label>
                            <input type="text" name={ele.applicationName} value={this.state.endpointName} onChange={this.handleEndpointName}/>
                    <input type="button" id={generateKey(ele.applicationName)} name ={ele.projectName} value="Add Endpoint" onClick={this.addEndpointName}/>
                        </div>)
                    })
                    }
                </>
            )
        }
        else{
            return null;
        }

    }

    render(){
        return(
            <>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <div align ="right">
                            <input type="button" value="Save"/>
                            <input type="button" value="Cancel"/>
                        </div>
                    </div>
                    <div>
                        <label>Poller Global Configuration:  </label>
                    </div>
                    <div>
                        <label>Key</label>
                        <input type="textarea" value={this.state.key} onChange={(e)=>{this.setState(()=>({key:event.target.value}))}}/>
                        <input type="button" value="Edit"/>
                    </div>
                    <div>
                        <label>Project:</label>
                        <input type="text" value={this.state.projectName} onChange={this.handleProjectname}/>
                        <input type="submit" value="Add Project" onClick={this.addProject}/>
                    </div>
                    <div>
                        {this.displayProjects()}<br/><br/><br/>
                        {JSON.stringify(this.state)}
                    </div>
                </form>
            </>
        )
    }
}
