import {setActiveUser, setErrorMessage} from "./authReducer";
import {AuthAPI} from "../../api/authApi";
import {UserAPI} from "../../api/userApi";
import Cookies from "universal-cookie";

const cookies = new Cookies();

let initializationState = {
    username: 'Anton',
    fetching: false,
    user: {
        id: 1,
        username: null,
        userSurname: null,
        img: null,
        birthday : null,
        family : null,
        education : null
    },
    friendList: [{
        name : null,
        img :null

    }],
    fotoList : [],
    videoList : [],
    audioList : [],
    fotos: [
        {
            id: 1,
            url: ''
        }
    ]
}
console.log(initializationState);
let userAccountReducer = (state = initializationState, action) => {
    switch (action.type) {
        case 'SET_USER' :
            return {
                ...state,
                user :{
                    id: action.id,
                    username: action.username,
                    userSurname: action.userSurname,
                    birthday : action.birthday,
                    family : action.family,
                    education : action.education,
                    img: action.img
                }
            }
        case 'SET_FETCHING' :
            return {
                ...state,
                fetching: action.value
            }
        case 'SET_FOTOS' :
            return {
                ...state,
                fotos: action.fotoList
            }
        case 'SET_FRIENDS_LIST' :
            return {
                ...state,
                friendList : action.friendList
            }
        case 'SET_AUDIO_LIST' :
            return {
                ...state,
                audioList : action.audioList
            }
        case 'SET_VIDEO_LIST' :
            return {
                ...state,
                videoList : action.videoList
            }
        default :
            return {
                ...state
            }
    }
}
/*ACTIONS */
export let setUser = (user) => {
    return {
        type: 'SET_USER',
        id: user.id,
        username: user.name,
        userSurname: user.surname,
        birthday : user.birthday,
        family : user.family,
        education : user.education,
        img: user.img
    }
}
export let setFetching = (value) => {
    return {
        type: 'SET_FETCHING',
        value: value
    }
}
export let setFotos = (fotoList) => {
    return {
        type : 'SET_FOTOS',
        fotoList : fotoList

    }
}
export let setFriendsList = (friendList) => {
    return {
        type : 'SET_FRIENDS_LIST',
        friendList : friendList

    }
}
export let setAudioList = (audioList) => {
    return {
        type : 'SET_AUDIO_LIST',
        audioList : audioList

    }
}
export let setVideoList = (videoList) => {
    return {
        type : 'SET_VIDEO_LIST',
        videoList : videoList

    }
}
/* THUNKS */
export let getUserById = (id) => (dispatch) => {
    dispatch(setFetching(true));
    let headers = {
        'Authorization': cookies.get('loginedUser').token
    }
    UserAPI.getUserById(id, headers).then(respounse => {
        let user =respounse.data;
        dispatch(setUser(user));
        dispatch(setFetching(false));
    })


}
export let getFotoListByUserId = (id) => (dispatch) => {
    let headers = {
        'Authorization': cookies.get('loginedUser').token
    }
    UserAPI.getFotosByUserId(id, headers).then(respounse => {
        let fotoList =respounse.data;
        dispatch(setFotos(fotoList));

    })
}
export let getAudioListByUserId = (id) => (dispatch) => {
    let headers = {
        'Authorization': cookies.get('loginedUser').token
    }
    UserAPI.getAudioByUserId(id, headers).then(respounse => {
        let audioList =respounse.data;
        dispatch(setAudioList(audioList));

    })
}
export let getVideoListByUserId = (id) => (dispatch) => {
    let headers = {
        'Authorization': cookies.get('loginedUser').token
    }
    UserAPI.getVideoByUserId(id, headers).then(respounse => {
        let videoList =respounse.data;
        dispatch(setVideoList(videoList));

    })
}
export let getFriendsListByUserId = (id) => (dispatch) => {
    let headers = {
        'Authorization': cookies.get('loginedUser').token
    }
    UserAPI.getFriendsListByUserId(id, headers).then(respounse => {
        let friendList =respounse.data;
        console.log(friendList);
        dispatch(setFriendsList(friendList));

    })


}
export default userAccountReducer;