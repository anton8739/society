import React from 'react';
import style from './Bottum.module.css';

const BottumMenu = (props) => {
    return (
        <div className={style.menu}>
            <div className={style.likesBlock}>
                <i className="fa fa-heart-o" aria-hidden="true"></i>
                {props.likes}
            </div>
            <div className={style.shareBlock}>
                <i className="fa fa-share" aria-hidden="true"></i>
                {props.share}
            </div>
            <div className={style.viewsBlock}>
                <i className="fa fa-eye" aria-hidden="true"></i>
                {props.views}
            </div>
        </div>
    )
}

export default BottumMenu;