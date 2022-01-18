import React from 'react';
import style from './friendItem.module.css';
const FriendItem = (props) => {
    return (
        <div className={style.item}>
            <img className={style.userFoto} src={props.userFoto}/>
            <div className={style.userName}>{props.userName}</div>
        </div>
    )
}

export default FriendItem;