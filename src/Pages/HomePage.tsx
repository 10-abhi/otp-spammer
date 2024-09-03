import { Button } from "../components/Button"
import { Footer } from "../components/footer"
import { Navbar } from "../components/NavBar"
import { Number } from "../components/Number"
import { InputBox } from "../components/InputBox"

   
export const HomePage = ()=>{
  
 return <div className="flex flex-col h-screen w-screen bg-gradient-to-b from-slate-900 via-sky-900 to-gray-900">
        <Navbar></Navbar>
    <div className="h-3/4 px-10 py-10 flex items-center flex-col">
        <Number></Number>
        <InputBox></InputBox>
        <div className="flex justify-center">
            <Button></Button>
        </div>
        
    </div>
    <Footer></Footer>
 </div>
}