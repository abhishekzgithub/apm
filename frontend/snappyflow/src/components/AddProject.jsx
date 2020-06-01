import React from "react";

export default class AddProject extends React.Component{
    render(){
        return(
            <div >
                <h2 align="center">Projects</h2>
            <div align="center">
                <form>
                    <label >Projects Global Settings</label><br/><br/>
                    <label>Project</label>
                    <div align="right" left="10px">
                            <button type="submit">Add</button>
                            <button type="submit">Edit</button>
                            <button type="submit">Delete</button>
                            <button type="submit">Save</button>
                    </div>
                    <label>Application</label><br/>
                    <div align="right">
                        <button type="submit">Add</button>
                        <button type="submit">Edit</button>
                        <button type="submit">Delete</button>
                        <button type="submit">Save</button>
                    </div>
                    <label>Application Settings</label><br/>
                        <div align="right">
                            <button type="submit">Add</button>
                            <button type="submit">Edit</button>
                            <button type="submit">Delete</button>
                            <button type="submit">Save</button>
                        </div>
                    <label>Application Details</label><br/><br/>
                    <div>
                        <label>EndPoints</label><br/>
                        <div align="right">
                            <button type="submit">Add</button>
                            <button type="submit">Edit</button>
                            <button type="submit">Delete</button>
                            <button type="submit">Save</button>
                        </div>
                        <label>Configurations</label><br/>
                        <div align="right">
                            <button type="submit">Add</button>
                            <button type="submit">Edit</button>
                            <button type="submit">Delete</button>
                            <button type="submit">Save</button>
                        </div>
                        <label>Tags</label><br/>
                        <div align="right">
                            <button type="submit">Add</button>
                            <button type="submit">Edit</button>
                            <button type="submit">Delete</button>
                            <button type="submit">Save</button>
                        </div>
                        <label>Metric</label><br/>
                        <div align="right">
                            <button type="submit">Add</button>
                            <button type="submit">Edit</button>
                            <button type="submit">Delete</button>
                            <button type="submit">Save</button>
                        </div>
                        <div>
                            <label>Config</label><br/>
                            <div align="right">
                            <button type="submit">Add</button>
                            <button type="submit">Edit</button>
                            <button type="submit">Delete</button>
                            <button type="submit">Save</button>
                        </div>
                        </div>
                    </div>
                </form>
            </div>
            </div>
            
        )
    }
}