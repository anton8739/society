import React from 'react';
import style from './Dialog.module.css';

const  Dialog = (props) => {
    return (
        <div className={style.dialog}>
            <img  className={style.img} src={props.dialog.img}/>
            <div className={style.info}>
                <div className={style.username}>{props.dialog.username}</div>
                <div className={style.text}>{props.dialog.lastMessage}</div>
            </div>
            <div className={style.timeWrapper}>
                <div className={style.time}>{props.dialog.time}</div>

            </div>
        </div>
    )
}

export default Dialog;