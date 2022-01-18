import React from 'react';
import style from './MusicBar.module.css';
import Menu from "./Menu/Menu";
import Search from "./Search/Search";
import FriendsMusicContainer from "./FriendsMusic/FriendsMusicContainer";
import MusicListContainer from "./MusicList/MusicListContainer";

const MusicBar = () => {
    return (
        <div>
            <Menu/>
            <Search/>
            <div className={style.content}>
                <MusicListContainer/>
                <FriendsMusicContainer/>
            </div>

        </div>
    )

}

export default MusicBar;