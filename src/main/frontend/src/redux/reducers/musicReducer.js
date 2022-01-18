import {UserAPI} from "../../api/userApi";
import {setFetching, setUser} from "./userAccountReducer";
import Cookies from "universal-cookie";

const cookies = new Cookies();
let initializationState = {
    friends: [
        {
            username: 'Антон Малашеня', numberOfSongs: 1467,
            img: 'https://sun9-10.userapi.com/s/v1/ig2/9XakHRqvMJwtkvxYR12dqIvbDTcRk7qUMPEgfgJ6eitubPewAH4Dgcl1b8ACf1n20nFu9ZKTWHnRortZUkWI3CiQ.jpg?size=200x0&quality=96&crop=317,0,1706,1706&ava=1'
        },
        {
            username: 'Денис Добрый', numberOfSongs: 3868,
            img: 'https://sun9-29.userapi.com/s/v1/if1/WuBUbHM9coRTKJYacdPd7G63nQxGfnxCU7l_scblFLnzS_xobEsZO80mcz_3a2wKXCUvacHk.jpg?size=200x0&quality=96&crop=182,0,1996,1996&ava=1'
        },
        {
            username: 'Андрей Тишкович', numberOfSongs: 18,
            img: 'https://sun9-22.userapi.com/s/v1/if1/J0fkLHzIKCYlqhinZnGA1G-812k7E0K26IXY_RXXGn3dJtMXoNy1lm99kUYidEFycREO1QTZ.jpg?size=200x0&quality=96&crop=247,0,538,538&ava=1'
        },
        {
            username: 'Вова Романов', numberOfSongs: 153,
            img: 'https://sun9-49.userapi.com/s/v1/if1/QtmVITWT05-WlOoFc_6wSD8nyzkxuM9M8qsRJ4wXsuJsO2e96r0_keswJl55sn2dKF_aEhLY.jpg?size=200x0&quality=96&crop=31,31,656,897&ava=1'
        },
        {
            username: 'Игорь Ракузов', numberOfSongs: 772,
            img: 'https://sun9-72.userapi.com/s/v1/ig2/TptpQYMip5mhYsI_rLoHbiZ19M0N8JpQ9BImc4EwgKNfd6QC0g1YnHFTTqr6nry8hMu0ps9_EUgo5AdtZoYLW87m.jpg?size=200x0&quality=96&crop=199,0,1200,1200&ava=1'
        },
        {
            username: 'Дмитрий Огиевич', numberOfSongs: 1186,
            img: 'https://sun9-14.userapi.com/s/v1/if1/HTRQkiru74C0dIoPE8gEMEZ6eEoJpjin708UK67jX6dTeZ-ZzZ1mo2-GnZBwB8vJdI_SVNgK.jpg?size=200x0&quality=96&crop=518,0,1440,1440&ava=1'
        }

    ],
    currentPlayList: [
        {
            id: -1,
            title: '', author: '', time: '',
            img: '',
            url: ''
        }
    ],
    currentComposetion: {
        id: -1,
        img: " ",
        url: " ",
        title: " ",
        author: " ",
        duration: 1, curTime: 1, playing: false, volume: 0.5, clickedTime: 1
    }
}

let musicReducer = (state = initializationState, action) => {
    let composition = null;
    switch (action.type) {
        case "SET_CURRENT_SONG" :

            return {
                ...state,
                currentComposetion: action.song
            }
        case "SET_DURATION":

            return {
                ...state,
                currentComposetion: {
                    ...state.currentComposetion,
                    duration: action.duration
                }
            }

        case "SET_CUR_TIME":
            return {
                ...state,
                currentComposetion: {
                    ...state.currentComposetion,
                    curTime: action.curTime
                }
            }

        case "SET_PLAYING":
            return {
                ...state,
                currentComposetion: {
                    ...state.currentComposetion,
                    playing: action.playing
                }
            }

        case "SET_VOLUME":
            return {
                ...state,
                currentComposetion: {
                    ...state.currentComposetion,
                    volume: action.volume
                }
            }
        case "SET_CLICKED_TIME":
            return {
                ...state,
                currentComposetion: {
                    ...state.currentComposetion,
                    clickedTime: action.clickedTime
                }
            }
        case 'SET_CURRENT_PLAY_LIST' :
            return {
                ...state,
                currentPlayList: action.currentPlayList
            }
        case 'SET_FRIENDS' :
            let friends = action.friendsList.map(friend => {
                return {
                    username: friend.username,
                    numberOfSongs:friend.numberOfAudio,
                    img: friend.img
                }
            })
            return {
                ...state,
                friends : friends
            }
        default :
            return {
                ...state
            }
    }
}

/* ACTIONS */
export let setCurrentPlayList = (currentPlayList) => {
    return {
        type: 'SET_CURRENT_PLAY_LIST',
        currentPlayList: currentPlayList
    }
}
export let setCurrentSong = (song) => {
    return {
        type: 'SET_CURRENT_SONG',
        song: song
    }
}
export let setDuration = (duration) => {
    return {
        type: 'SET_DURATION',
        duration: duration
    }
}
export let setCurTime = (curTime) => {
    return {
        type: 'SET_CUR_TIME',
        curTime: curTime
    }
}
export let setPlaying = (playing) => {
    return {
        type: 'SET_PLAYING',
        playing: playing
    }
}
export let setVolume = (volume) => {
    return {
        type: 'SET_VOLUME',
        volume: volume
    }
}
export let setClickedTime = (clickedTime) => {
    return {
        type: 'SET_CLICKED_TIME',
        clickedTime: clickedTime
    }
}
export let setFriends = (friendsList) => {
    return {
        type: 'SET_FRIENDS',
        friendsList: friendsList

    }
}
/* THUNKS */
export let getCurrentPlayListByUserId = (id) => (dispatch) => {

    let headers = {
        'Authorization': cookies.get('loginedUser').token
    }
    UserAPI.getAudioByUserId(id, headers).then(respounse => {
        let playList = respounse.data;
        dispatch(setCurrentPlayList(playList));
    })


}

export let getFriendsListForMusicPage = (id) => (dispatch) => {

    let headers = {
        'Authorization': cookies.get('loginedUser').token
    }
    UserAPI.getFriendsListByUserId(id, headers).then(respounse => {
        let friendsList = respounse.data;
        console.log(friendsList);
        dispatch(setFriends(friendsList))
    })


}

export default musicReducer;