import React from 'react';

import style from './RightMenu.module.css';
import RightMenuItem from "./RightMenuItem/RightMenuItem";

const RightMenu = () => {
    return (
        <div className={style.menu}>
            <RightMenuItem to="/friends/my" title="Мои друзья"/>
            <RightMenuItem to="/friends/wanted" title="Заявки в друзья"/>
            <RightMenuItem to="/friends/search" title="Поиск друзей"/>
        </div>
    )
}

export default RightMenu;