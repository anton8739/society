import React from 'react';
import style from './Menu.module.css';

const Menu = (props) => {
    return (
        <div className={style.menu}>
            <div className={style.album}>
                <span className={style.albumTitle}>Мои альбомы</span>
                <span className={style.albumNumber}>{props.numberOfAlbums}</span>
            </div>
            <div className={style.create}>Создать альбом</div>
            <div className={style.add}>Добавить фотографии</div>
        </div>
    )
}

export default Menu;