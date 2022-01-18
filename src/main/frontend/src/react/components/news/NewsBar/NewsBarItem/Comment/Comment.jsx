import React from 'react';

import style from './Comment.module.css';

const Comment = (props) => {
    return (
        <div className={style.comment}>
            <img className={style.img} src={props.comment.img}/>
            <div>
                <div className={style.username}>{props.comment.username}</div>
                <div className={style.text}>{props.comment.text}</div>
                <div className={style.answerBar}>
                    <div className={style.time}>{props.comment.time}</div>
                    <div className={style.answer}><span>Ответить</span></div>
                    <div className={style.like}>
                        <span>{props.comment.likes}</span>
                        <span><i className="fa fa-heart-o" aria-hidden="true"></i></span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Comment;