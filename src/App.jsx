import {Header,Footer} from "./components/index"
import { Outlet } from "react-router"
import './index.css'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
        <Header/>
        <main className="flex-1">
        <Outlet/>
        </main>
        <Footer/>
    </div>
  )
}

export default App
