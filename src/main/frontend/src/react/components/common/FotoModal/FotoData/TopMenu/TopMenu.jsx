import React from 'react';
import style from './TopMenu.module.css';

const TopMenu = (props) => {
    return (
        <div className={style.topMenu}>
            <div className={style.userInfo}>
                <img src={props.user.img} className={style.img}/>
                <div className={style.description}>
                    <div className={style.username}> {props.user.username}</div>
                    <div className={style.fotoData}>{props.data}</div>
                </div>
            </div>
            <div className={style.LS}>
                <div>
                    <i className="fa fa-heart-o" aria-hidden="true"></i>
                    <span> {props.likes}</span>
                </div>
                <div>
                    <i className="fa fa-share" aria-hidden="true"></i>
                    <span> {props.share}</span>
                    </div>
            </div>

        </div>
    )
}

export default TopMenu;