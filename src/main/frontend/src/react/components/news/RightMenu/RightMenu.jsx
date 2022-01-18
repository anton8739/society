import React from 'react';
import style from './RightMenu.module.css';
import RightMenuItem from "./RightMenuItem/RightMenuItem";

const RightMenu = () => {
    return (
        <div className={style.menu}>
           <RightMenuItem title="Новости" to="/news/1"/>
            <RightMenuItem title="Понравилось" to="/news/2"/>
            <RightMenuItem title="Коментарии" to="/news/3"/>
        </div>
    )
}

export default RightMenu;