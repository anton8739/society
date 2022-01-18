import React from 'react';
import style from './GroupsList.module.css';
import Search from "./Search/Search";
import ListContainer from "./List/ListContainer";
import TopMenuContainer from "./TopMenu/TopMenuContainer";

const GroupsList = () => {
    return (
        <div>
            <TopMenuContainer/>
            <Search/>
            <ListContainer/>
        </div>
    )
}

export default GroupsList;