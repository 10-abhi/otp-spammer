import React from "react"

export const Button = ({onClick}:any)=>{
   return <button onClick={onClick} className="rounded-xl bg-navy-700 px-5 py-3 text-base font-medium text-white transition duration-200 hover:bg-navy-800 active:bg-navy-900 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/30">
  Start Bombing
</button>
}