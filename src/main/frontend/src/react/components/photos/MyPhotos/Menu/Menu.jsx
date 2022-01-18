import React from 'react';
import style from './Menu.module.css';

const Menu = (props) => {
    return (
        <div className={style.menu}>
            <div className={style.album}>
                <span className={style.albumTitle}>Мои фотографии</span>
                <span className={style.albumNumber}>{props.numberOfPhotos}</span>
            </div>
            <div className={style.comments}>Коментарии к фотографиям</div>
        </div>
    )
}

export default Menu;