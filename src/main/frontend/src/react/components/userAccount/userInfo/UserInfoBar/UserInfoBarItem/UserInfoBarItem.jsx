import React from 'react';

import style from './UserInfoBarItem.module.css';

const UserInfoBarItem = (props) => {
    return (
        <div>
            <div className={style.number}>
                {props.number}
            </div>
            <div className={style.title}>
                {props.title}
            </div>

        </div>
    )
}

export default UserInfoBarItem;