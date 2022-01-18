import React from 'react';
import style from './userInfoBar.module.css';
import UserInfo from "../UserInfo";
import UserInfoBarItem from "./UserInfoBarItem/UserInfoBarItem";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        numberOfFriends : state.userAccount.friendList.length,
        numberOfFoto : state.userAccount.fotos.length,
        numberOfVideo : state.userAccount.videoList.length
    }

}

const UserInfoBar = (props) => {
    return (
        <div className={style.bar}>
            <UserInfoBarItem title="друзей" number={props.numberOfFriends}/>
            <UserInfoBarItem title="подписчика" number="167"/>
            <UserInfoBarItem title="фотографий" number={props.numberOfFoto}/>
            <UserInfoBarItem title="отметок" number="167"/>
            <UserInfoBarItem title="видеозаписей" number={props.numberOfVideo}/>
        </div>
    )
}



export default connect (mapStateToProps, {})(UserInfoBar);
