import { parentPort, workerData } from "worker_threads"
import { error } from "console"
import axios from "axios"

async function sendRequest(
    url : string,
    method : string,
    headers : {[key : string]  : string},
    data : any
  ) {
    switch (method.toLowerCase()) {
      case "get":
        return await axios.get(url, {
          headers
        })
      case "post":
        return await axios.post(url, data, {
          headers
        })
      default:
        throw error("invalid method")
    }
  }

   async function worker (){
   try{const response =  await sendRequest( workerData.url ,
       workerData.method ,
        workerData.headers ,
         workerData.data ) ;
      parentPort?.postMessage(response.data)
      } catch(error){
      parentPort?.postMessage(error.message)
      }
}

worker();