import React from 'react';
import style from './RightMenu.module.css';
import RightMenuItem from "./RightMenuItem/RightMenuItem";

const RightMenu = (props) => {
    return (
        <div className={style.menu}>
            <RightMenuItem to="/messages/all" title="Все чаты"/>
            <RightMenuItem to="/messages/unread" title="Не прочитанные"/>
        </div>
    )
}

export default RightMenu;