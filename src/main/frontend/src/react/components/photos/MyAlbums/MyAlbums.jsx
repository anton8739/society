import React from 'react';
import style from './MyAlbums.module.css';
import MenuContainer from "./Menu/MenuContainer";
import AlbumsBarContainer from "./AlbumsBar/AlbumsBarContainer";

const MyAlbums = () => {
    return (
        <div>
            <MenuContainer/>
            <AlbumsBarContainer/>
            <div className={style.btn}>
                <span>Показать все альбомы</span>
            </div>
        </div>
    )
}

export default MyAlbums;