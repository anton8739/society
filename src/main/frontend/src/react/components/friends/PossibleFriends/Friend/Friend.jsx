import React from 'react';
import style from './Friend.module.css';

const Friend = (props) => {
    return (
        <div className={style.friend}>
            <img className={style.img} src={props.friend.img}/>
            <div className={style.info}>
                <div className={style.username}>
                    {props.friend.username}
                </div>
                <div className={style.commonFriends}>
                    <span>{props.friend.commonFriends}</span> <span>общих друга</span>
                </div>
                <div className={style.addToFriends}>
                    <span><i className="fa fa-plus" aria-hidden="true"></i></span>
                    <span>Добавить в друзья</span>
                </div>
            </div>
        </div>
    )
}

export default Friend;