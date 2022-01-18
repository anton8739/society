import {UserAPI} from "../../api/userApi";
import {setFriendsList} from "./userAccountReducer";
import Cookies from "universal-cookie";

const cookies = new Cookies();
let initializationState = {
    username: 'Anton',
    numberOfFriends: 168,
    friendsOnline: 18,
    friendsList: [],
    possibleFriends: [
        {
            username: 'Александр Бердник',
            commonFriends: 6,
            img: 'https://sun2.beltelecom-by-minsk.userapi.com/s/v1/if1/V2a8A5O8KqJt2CTZa3MIzmPtHOkqK8TpzRSaxS1KojSKGvmMpBqx5CtBOCa3xj27PMRrqjSb.jpg?size=50x0&quality=96&crop=187,165,1152,1152&ava=1'
        },
        {
            username: 'Вячеслав Павлов',
            commonFriends: 16,
            img: 'https://sun1.beltelecom-by-minsk.userapi.com/s/v1/if1/QbeRuaTRBLSB-kBvscOX9pbJnYHfVFctC_61b2Y2dYWBUNhznahtW8Nh6bviZ4jlBveIeQ.jpg?size=50x0&quality=96&crop=339,628,1245,1245&ava=1'
        },
        {
            username: 'Владимир Слаек',
            commonFriends: 13,
            img: 'https://sun2.beltelecom-by-minsk.userapi.com/s/v1/ig2/T5ThXVqMrYhHbJQCk_KxUuhqSKqKqFIv8tFx0pPobL_HvWNM6zCKnmXuCGM2lj7Vs5awnO4XUzxFSG0JnN5zyH_D.jpg?size=50x0&quality=96&crop=35,75,516,516&ava=1'
        },
        {
            username: 'Дима Бобылев',
            commonFriends: 12,
            img: 'https://sun2.beltelecom-by-minsk.userapi.com/s/v1/if1/tStURcfUr1O82NQJeWki5z_QNZH9cSVr4Jo_n5GDxBq2Pk4IiMn38Z4CnV9qF40ekVwsRA.jpg?size=50x0&quality=96&crop=991,22,1180,1180&ava=1'
        },
        {
            username: 'Тимур Насыров',
            commonFriends: 10,
            img: 'https://sun2.beltelecom-by-minsk.userapi.com/s/v1/ig2/ZK53jB3lDIWjO9OCkd9aRvfXM50_LM9Td6mYuTn1-89BD1q-L4sIVqYW0WIw3vkV_7lvrAUPNnf1dBesXIJ2QqaL.jpg?size=50x0&quality=96&crop=99,0,1041,1041&ava=1'
        }
    ]


}

let friendsReducer = (state = initializationState, action) => {
    switch (action.type) {
        case 'SET_FRIEND_LIST' :
            return {
                ...state,
                friendsList: action.friendsList
            }
        case 'FriendR_SET_POSSIBLE_FRIEND_LIST' :
            let possibleFriends = action.possibleFriendList.map(friend => {
                return {
                    username: friend.username,
                    commonFriends: friend.numberOfFriends,
                    img: friend.img
                }
            }).slice(0,5);
            return {
                ...state,
                possibleFriends: possibleFriends
            }
        default :
            return {
                ...state
            }
    }
}

/*ACTIONS */
export let setFriendList = (friendsList) => {
    return {
        type: 'SET_FRIEND_LIST',
        friendsList: friendsList

    }
}
export let setPossibleFriendList = (possibleFriendList) => {
    return {
        type: 'FriendR_SET_POSSIBLE_FRIEND_LIST',
        possibleFriendList: possibleFriendList

    }
}
/* THUNKS */
export let getFriendsListByUserId = (id) => (dispatch) => {
    let headers = {
        'Authorization': cookies.get('loginedUser').token
    }
    UserAPI.getFriendsListByUserId(id, headers).then(respounse => {
        let friendList = respounse.data;
        console.log(friendList);
        dispatch(setFriendList(friendList));

    })
}
export let getPossibleFriendsListByUserId = (id) => (dispatch) => {
    let headers = {
        'Authorization': cookies.get('loginedUser').token
    }
    UserAPI.getPossibleFriendsByUserId(id, headers).then(respounse => {
        let possibleFriendList = respounse.data;
        dispatch(setPossibleFriendList(possibleFriendList));

    })
}
export default friendsReducer;