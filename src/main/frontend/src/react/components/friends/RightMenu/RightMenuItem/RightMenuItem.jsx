import React from 'react';
import style from './RightMenuItem.module.css';
import {NavLink} from "react-router-dom";

const  RightMenuItem = (props) => {
    return (
        <NavLink activeClassName={style.active} to={props.to} className={style.item}>
            {props.title}
        </NavLink>
    )
}

export default RightMenuItem;