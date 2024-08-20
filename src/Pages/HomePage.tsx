import { Navbar } from "../components/NavBar"
import { Number } from "../components/Number"

export const HomePage = ()=>{
 return <div className="h-screen w-screen bg-gradient-to-b from-slate-900 via-sky-900 to-gray-900">
    <div>
        <Navbar></Navbar>
        <Number></Number>
    </div>
 </div>
}