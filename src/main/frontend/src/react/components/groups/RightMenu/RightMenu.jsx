import React from 'react';

import style from './RightMenu.module.css';
import RightMenuItem from "./RightMenuItem/RightMenuItem";

const RightMenu = () => {
    return (
        <div className={style.menu}>
            <RightMenuItem to="/groups/my" title="Мои сообщества"/>
            <RightMenuItem to="/groups/search" title="Поиск сообществ"/>
            <RightMenuItem to="/groups/wanted" title="Рекомендации"/>
        </div>
    )
}

export default RightMenu;