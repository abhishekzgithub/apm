import Head from 'next/head'
//import Login from "../src/components/Login"
//import Dashboard from "../src/components/Dashboard"

// import "./../public/css/addProject.css"
import ProjectTree from "../src/components/ProjectTree"

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
        <div id="id-ProjectTree">
          <ProjectTree/>
        </div>
      </main>
    </div>
  )
}
