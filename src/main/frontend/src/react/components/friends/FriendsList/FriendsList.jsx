import React from 'react';
import style from './FriendsList.module.css';
import Search from "./Search/Search";
import ListContainer from "./List/ListContainer";
import TopMenuContainer from "./TopMenu/TopMenuContainer";

const FriendsList = () => {
    return (
        <div>
            <TopMenuContainer/>
            <Search/>
            <ListContainer/>
        </div>
    )
}

export default FriendsList;