import React from "react";

export default class Login extends React.Component{
  render(){
    return(
      <>
      <form action="/login" method="post" id="id-form">
        <label id="id-username">Username</label>
        <input type="text"></input><br/>
        <label id="id-password">Password</label>
        <input type="password"></input><br/>
      </form>
      <button type="submit" form="id-form" value="submit">submit</button>
      </>
    )
  }
}