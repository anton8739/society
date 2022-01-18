import React from 'react';
import style from './userIcon.module.css';
import {NavLink} from "react-router-dom";
import Icon from "./Icon/Icon";

const UserIcon = (props) => {

    return (
        <div className={style.main}>
            <Icon img={props.img}/>
            <NavLink className={style.link} to="/account/edit">Редактировать
            </NavLink>
        </div>
    )
}

export default UserIcon;