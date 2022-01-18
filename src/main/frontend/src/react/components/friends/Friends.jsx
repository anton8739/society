import React from 'react';
import style from './friends.module.css'
import LeftMenu from "../common/leftMenu/LeftMenu";
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";
import FriendsList from "./FriendsList/FriendsList";
import RightMenu from "./RightMenu/RightMenu";
import PossibleFriendsContainer from "./PossibleFriends/PossibleFriendsContainer";
import {AuthHoc} from "../../../hoc/authHoc";


const Friends = () => {
    return (
        <div className={style.main}>
            <Header/>
            <div className={style.content}>
                <div className={style.leftMenu}>
                    <LeftMenu/>
                </div>
                <div className={style.friends}>
                    <div className={style.friendsList}>
                        <FriendsList/>
                    </div>
                    <div className={style.rightMenu}>
                        <RightMenu/>
                    </div>
                    <div className={style.possibleFriends}>
                        <PossibleFriendsContainer/>
                    </div>

                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default AuthHoc(Friends);