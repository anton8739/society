import React from 'react';
import style from './BottomMenu.module.css';
import {NavLink} from "react-router-dom";

const BottumMenu = () => {
    return (
        <div>
            <div className={style.myfoto}>
                <NavLink to="/asdf" className={style.link}>
                    Фотографии с моей страницы
                </NavLink>
                <div>
                    1 из 21
                </div>
            </div>
            <div className={style.bar}>
                <div>Поделиться </div>
                <div>Удалить</div>
                <div>Еще</div>
            </div>
        </div>
    )
}

export default BottumMenu;
