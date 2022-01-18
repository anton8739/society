import React from 'react';

import style from './PossibleFriends.module.css';
import Friend from "./Friend/Friend";
import {getPossibleFriendsListByUserId} from "../../../../redux/reducers/friendsReducer";

const PossibleFriends = (props) => {
    React.useEffect(() => {
        props.getPossibleFriendsListByUserId(props.currentUserId);
    },[]);
    let possibleFriendsList = props.possibleFriends.map(friend => <Friend friend={friend}/>)
    return (
        <div className={style.bar}>
            <div className={style.possible}>Возможные друзья</div>
            {possibleFriendsList}
        </div>
    )
}

export default PossibleFriends;