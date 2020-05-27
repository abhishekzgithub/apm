import Head from 'next/head'
import Login from "../src/components/Login"
import Dashboard from "../src/components/Dashboard"


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>SnappyFlow</title>
      </Head>
      <main>
        {/* <div id="id-login">
          <Login/>
        </div> */}
        <div id="id-dashboard">
          <br/><br/>
          <Dashboard/>
        </div>
      </main>
    </div>
  )
}
