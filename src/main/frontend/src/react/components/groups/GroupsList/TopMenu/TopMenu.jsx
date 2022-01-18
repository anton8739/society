import React from 'react';
import style from './TopMenu.module.css';
import {NavLink} from "react-router-dom";

const TopMenu = (props) => {

    return (
        <div className={style.menu}>
            <NavLink activeClassName={style.active} to="/groups/my/1" className={style.item}>Все сообщества {props.numberOfGroups}</NavLink>
            <NavLink to="/groups/my/2" className={style.btn}>Создать сообщество </NavLink>
        </div>
    )
}

export default TopMenu;