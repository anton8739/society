import React from 'react';

import style from './User.module.css';

const User = (props) => {
    return (
        <div className={style.user}>
            <span className={style.close}><i className="fa fa-times" aria-hidden="true"></i></span>
            <img className={style.img} src={props.user.img}/>
            <div className={style.username}>{props.user.username}</div>
        </div>
    )
}

export default User;
