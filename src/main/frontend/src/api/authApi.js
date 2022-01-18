import * as axios from "axios/index";

const instance = axios.create({
    baseURL : 'http://localhost:8080/app/'
})

export const  AuthAPI = {
    login(login, password){
        return instance.post("auth", {login : login, password : password});
    }

}
