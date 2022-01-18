import {UserAPI} from "../../api/userApi";
import {setCurrentPlayList} from "./musicReducer";
import Cookies from "universal-cookie";
const cookies = new Cookies();
let initializationState = {
    currentVideo: {
        id: 1, title: 'Не хотите попробовать наш вегетарианский бекон?',
        aurthorIcon: 'https://sun2.beltelecom-by-minsk.userapi.com/s/v1/if1/aR07wQ6WDW0Jm8XA8wsBnkt66CRkjovoAw7yM-EsfaXgir1adgnI22DEhrXzSU4zOgBKDSIj.jpg?size=100x0&quality=96&crop=0,0,800,800&ava=1',
        author: 'Vine Video', views: '562 250', data: 'четыре года назад', time: '0:29',
        url: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4',
        img: 'https://cdn.lifehacker.ru/wp-content/uploads/2019/12/video_circle_1576757259-1140x570.jpg',
        likes: 12
    },
    videoList: [
        {
            id: -1,
            title: '',
            author: '',
            views: '',
            data: '',
            time: '',
            url: '',
            img: ''

        }
    ]
}

let videoReducer = (state = initializationState, action) => {
    switch (action.type) {
        case 'SET_CURRENT_VIDEO':
            let newVideo = state.videoList.filter(value => value.id === action.id)[0];
            return {
                ...state,
                currentVideo: {
                    id: newVideo.id, title: newVideo.title,
                    aurthorIcon: 'https://sun2.beltelecom-by-minsk.userapi.com/s/v1/if1/aR07wQ6WDW0Jm8XA8wsBnkt66CRkjovoAw7yM-EsfaXgir1adgnI22DEhrXzSU4zOgBKDSIj.jpg?size=100x0&quality=96&crop=0,0,800,800&ava=1',
                    author: newVideo.author, views: newVideo.views, data: newVideo.data, time: newVideo.time,
                    url: newVideo.url,
                    img: newVideo.img,
                    likes: newVideo.likes
                }
            }
        case 'CHOOSE_NEXT_VIDEO' : {
            let newVideo;
            let currentVideoIndex = state.videoList.findIndex(value => value.id === action.id);
            if (currentVideoIndex === state.videoList.length - 1) {
                newVideo = state.videoList[0];
            } else {
                newVideo = state.videoList[currentVideoIndex + 1];
            }
            return {
                ...state,
                currentVideo: {
                    id: newVideo.id, title: newVideo.title,
                    aurthorIcon: 'https://sun2.beltelecom-by-minsk.userapi.com/s/v1/if1/aR07wQ6WDW0Jm8XA8wsBnkt66CRkjovoAw7yM-EsfaXgir1adgnI22DEhrXzSU4zOgBKDSIj.jpg?size=100x0&quality=96&crop=0,0,800,800&ava=1',
                    author: newVideo.author, views: newVideo.views, data: newVideo.data, time: newVideo.time,
                    url: newVideo.url,
                    img: newVideo.img,
                    likes: newVideo.likes
                }
            }
        }
        case 'VideoR_SET_VIDEO' :
            let videoList =action.videoList.map(video => {
                return {
                    id: video.id,
                    title: video.title,
                    author: video.author,
                    views: video.views,
                    data: 'четыре года назад',
                    time: '0:29',
                    url: video.url,
                    img: video.img

                }
            });
        return {
            ...state,
            videoList :videoList
        }
        default :
            return {
                ...state
            }
    }
}

/* ACTIONS */
export let setCurrentVideo = (id) => {
    return {
        type: 'SET_CURRENT_VIDEO',
        id: id
    }

}
export let chooseNextVideo = (id) => {
    return {
        type: 'CHOOSE_NEXT_VIDEO',
        id: id
    }
}
export let setVideoList = (videoList) => {
    return {
        type: 'VideoR_SET_VIDEO',
        videoList: videoList

    }
}
/* THUNKS */
export let getVideoListByUserId = (id) => (dispatch) => {

    let headers = {
        'Authorization': cookies.get('loginedUser').token
    }
    UserAPI.getVideoByUserId(id, headers).then(respounse => {
        let videoList = respounse.data;
        console.log(respounse.data);
        dispatch(setVideoList(videoList));
    })


}

export default videoReducer;