import * as axios from "axios/index";

const instance = axios.create({
    baseURL : 'http://localhost:8080/app/'
})

export const  UserAPI = {
    getUserById(id,headers){
        return instance.get(`user/findUserById/${id}`,{
            headers: headers
        });
    },
    getFotosByUserId(id,headers){
        return instance.get(`/foto/getFotoListByUserId/${id}`,{
            headers: headers
        });
    },
    getFriendsListByUserId(id,headers){
        return instance.get(`/user/getUserFriendList/${id}`,{
            headers: headers
        });
    },
    getAudioByUserId(id,headers){
        return instance.get(`/audio/getAudioListByUserId/${id}`,{
            headers: headers
        });
    },
    getVideoByUserId(id,headers){
        return instance.get(`/video/getVideoListByUserId/${id}`,{
            headers: headers
        });
    },
    getPossibleFriendsByUserId(id,headers){
        return instance.get(`/user/getPossibleFriendList/${id}`,{
            headers: headers
        });
    }
    }

