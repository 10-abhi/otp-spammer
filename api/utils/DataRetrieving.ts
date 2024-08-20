import * as smsApiData from "./smsApi.json";
 //this interface shows the structure of indivisual obj
interface SmsApi {
    url : string ,
    method : string ,
    headers : {[key : string]  : string},
    data : any
}
//this interface shows structure of the entire data obj 
interface SmsApiData{
    [keys : string] : SmsApi;
}

async function getApiData ( key : string , target : string ) : Promise<SmsApi> {
    const apiData = smsApiData[key];
    if(!apiData){
        throw new Error(`Api data for key ${key} not found`);
    }
    const url = apiData.url.replace(`${target}` , target)
    let data ;
    if(typeof apiData.data === 'string'){
      apiData.data.replace(`${target}` , target)
    }else{
        data = {...apiData.data};
        for(const prop in data){
            if(typeof data[prop] ==='string'){
                data[prop].replace(`${target}` , target);
            }
        }
    }

    const response = await axios({
        url,
        method : apiData.method,
        headers : apiData.headers,
        data
    })
    return response.data
}
