import React from 'react';
import style from  './TopMenu.module.css'

const TopMenu = (props) => {
    return (
        <div className={style.menu}>

            <img className={style.img} src={props.img}/>
            <div className={style.content}>
                <div className={style.userName}>{props.username}</div>
                <div className={style.data}>{props.data}</div>
            </div>
        </div>
    )
}


export default TopMenu;
