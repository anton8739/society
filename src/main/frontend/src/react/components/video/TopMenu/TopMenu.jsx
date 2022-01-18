import React from 'react';
import style from './TopMenu.module.css';
import {NavLink} from "react-router-dom";

const TopMenu = (props) => {

    return (
        <div className={style.menu}>
            <NavLink activeClassName={style.active} to="/video/my" className={style.item}>Мои видео </NavLink>
            <NavLink activeClassName={style.active} to="/video/catalog" className={style.item}>Видеокаталог </NavLink>
            <NavLink to="/video/add" className={style.btn}>Добавить видео </NavLink>
        </div>
    )
}

export default TopMenu;