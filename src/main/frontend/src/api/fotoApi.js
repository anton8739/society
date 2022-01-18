import * as axios from "axios/index";

const instance = axios.create({
    baseURL : 'http://localhost:8080/app/'
})

export const  FotoAPI = {
    getFotoInfo(id,headers){
        return instance.get(`foto/getFotoById/${id}`,{
            headers: headers
        });
    }
}

