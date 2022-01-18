import React from 'react';
import style from './TopMenu.module.css';
import {NavLink} from "react-router-dom";

const TopMenu = (props) => {

    return (
        <div className={style.menu}>
            <NavLink activeClassName={style.active} to="/friends/my/1" className={style.item}>Все друзья {props.numberOfFriends}</NavLink>
            <NavLink activeClassName={style.active} to="/friends/my/2" className={style.item}>Друзья онлайн {props.friendsOnline}</NavLink>
            <NavLink to="/friends/my/3" className={style.btn}>Найти друзей </NavLink>
        </div>
    )
}

export default TopMenu;