import { InputBox } from "./InputBox"

export const Number = ()=>{
    return <div className="h-max px-10 py-10 flex justify-center items-center flex-col">
        <div className="text-lg text-white font-medium px-4 py-6 ">
            Enter 10 digit Phone Number 
        </div>
       <InputBox></InputBox>
    </div>
}