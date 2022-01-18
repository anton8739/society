import React from 'react';
import style from './Friend.module.css';

const Friend = (props) => {
    return (
        <div className={style.friend}>
            <img className={style.img} src={props.friend.img}/>
            <div>
                <div className={style.username}>
                    {props.friend.name} {props.friend.surname}
                </div>
                <div className={style.work}>
                    {props.friend.education}
                </div>
                <div>
                    <div className={style.addMessage}>Написать сообщение</div>
                    <div></div>
                </div>

            </div>
            <div className={style.friendMenu}>
                <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
            </div>
        </div>
    )
}

export default Friend;