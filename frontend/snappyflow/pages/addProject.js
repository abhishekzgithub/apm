import Head from 'next/head'
//import Login from "../src/components/Login"
//import Dashboard from "../src/components/Dashboard"

//import "./../public/css/addProject.css"
import AddProject from "../src/components/AddProject"

export default function addProject() {
  return (
    <div className="container">
      <Head>
        <title>SnappyFlow</title>
      </Head>
      <main>
        {/* <div id="id-login">
          <Login/>
        </div> */}
        {/* <div id="id-dashboard">
          <br/><br/>
          <Dashboard/>
        </div> */}
        <div id="id-addproject">
          <AddProject/>
        </div>
      </main>
    </div>
  )
}
