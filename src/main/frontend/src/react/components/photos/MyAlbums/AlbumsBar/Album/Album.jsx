import React from 'react';
import style from './Album.module.css';

const Album = (props) => {
    return (
            <div  className={style.album} style={{
                backgroundImage: `url(${props.album.img})`
            }}>
                <div className={style.title}>{props.album.title}</div>
                <div className={style.number}>{props.album.numberOfPhotos}</div>
            </div>
    )
}

export default Album;