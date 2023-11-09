import axios from "axios"

export const commonAPI= async (httpMethod,url,reqbody)=>{
    const reqconfig={
        method: httpMethod,
        url: url,
        data: reqbody,
        // can specify content in header using Content-type
        // -if content available on internet then its type application/json
        // -if content not available on internet then its type maultipart/form data
        Headers:{
            "Content-Type":"application/json"
        }
    }

    return await axios(reqconfig).then((result)=>{
        return result
    }).catch((err)=>{
        return err
    })
}