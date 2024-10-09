import React from "react"

export const InputBox = ({onChange}:any)=>{
       return  <div className="pt-0 pb-6" >
              <input type="text" placeholder="8829201764" className="border-2
       
       rounded-md hover:border-green-900 h-10 w-64 flex justify-center items-center" onChange={onChange}/></div>
}