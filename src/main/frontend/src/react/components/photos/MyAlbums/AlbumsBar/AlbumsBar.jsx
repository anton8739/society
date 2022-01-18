import React from 'react';
import style from './AlbumBar.module.css';
import Album from "./Album/Album";

const AlbumBar = (props) => {
    let albums = props.albums.map(album => <Album album={album}/>).slice(0,3);
    return (
        <div className={style.bar}>
            {albums}
        </div>
    )
}

export default AlbumBar;