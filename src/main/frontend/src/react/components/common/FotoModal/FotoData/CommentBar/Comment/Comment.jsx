import React from 'react';
import style from './Comment.module.css';

const Comment = (props) => {
    return(
        <div className={style.comment}>
            <img src={props.comment.img} className={style.img}/>
            <div>
                <div className={style.username}>{props.comment.username}</div>
                <div className={style.text}>{props.comment.text}</div>
                <div className={style.commentMenu}>
                    <div className={style.data}>{props.comment.data}</div>
                    <div className={style.answer}>Ответить</div>
                </div>
            </div>
        </div>
    )
}

export default Comment;