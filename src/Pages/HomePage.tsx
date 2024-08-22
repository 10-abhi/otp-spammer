import { Footer } from "../components/footer"
import { Navbar } from "../components/NavBar"
import { Number } from "../components/Number"

export const HomePage = ()=>{
 return <div className="h-screen w-screen bg-gradient-to-b from-slate-900 via-sky-900 to-gray-900">
        <Navbar></Navbar>
    <div className="h-3/4">
        <Number></Number>
    </div>
    <Footer></Footer>
 </div>
}