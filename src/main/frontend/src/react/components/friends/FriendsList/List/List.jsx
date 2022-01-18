import React from 'react';
import style from './List.module.css';
import Friend from "./Friend/Friend";
import {getFriendsListByUserId} from "../../../../../redux/reducers/friendsReducer";

const List = (props) => {

    React.useEffect( () => {
        props.getFriendsListByUserId(props.currentUserId);
    },[]);
    let friendsList =props.friendList.map(friend => <Friend friend={friend}/>)
    return (
        <div className={style.list}>
            {friendsList}
        </div>
    )
}

export default List;