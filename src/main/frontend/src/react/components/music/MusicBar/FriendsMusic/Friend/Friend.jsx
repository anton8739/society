import React from 'react';
import style from './Friend.module.css';

const Friend = (props) => {
    return (
        <div className={style.friend}>
            <img  className={style.img} src={props.friend.img}/>
            <div>
                <div className={style.username}>{props.friend.username}</div>
                <div className={style.song}>{props.friend.numberOfSongs}</div>
                <div className={style.song}> аудиозаписи</div>
            </div>
        </div>
    )
}

export default Friend;