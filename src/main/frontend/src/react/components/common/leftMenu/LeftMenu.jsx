import React from 'react';
import style from  './LeftMenu.module.css';
import LeftMenuItem from "./leftMenuItem/LeftMenuItem";

const LeftMenu = (props) => {
    return (
        <div className={style.menu}>
            <LeftMenuItem to="/account" text="Моя страница" icon="fa fa-user-circle-o"/>
            <LeftMenuItem to="/news" text="Новости" icon="fa fa-newspaper-o"/>
            <LeftMenuItem to="/messages" text="Месседжер" icon="fa fa-comment-o"/>
            <LeftMenuItem to="/friends" text="Друзья" icon="fa fa-handshake-o"/>
            <LeftMenuItem to="/groups" text="Сообщества" icon="fa fa-users"/>
            <LeftMenuItem to="/photos" text="Фотографии" icon="fa fa-camera-retro"/>
            <LeftMenuItem to="/music" text="Музыка" icon="fa fa-music"/>
            <LeftMenuItem to="/video" text="Видео" icon="fa fa-video-camera"/>
        </div>
    )
}

export default LeftMenu;