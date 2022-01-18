import React from 'react';
import style from './userInfo.module.css';
import UserInfoBar from "./UserInfoBar/UserInfoBar";
import {Cookies} from "universal-cookie";


const UserInfo = (props) => {



    return (
        <div className={style.main}>
            <div className={style.userBar}>
            <div className={style.username}>{props.username+" " +props.userSurname}</div>
            <div className={style.time}>заходил 11 минут назад</div>
            </div>
            <div className={style.status}>никогда не сдавайся</div>
            <div>
                <div>
                    <span className={style.infoItem}>День рождения: </span>
                    <span className={style.infoItemText}>{props.birthday}</span>
                </div>
                <div>
                    <span className={style.infoItem}>Семейное положение: </span>
                    <span className={style.infoItemText}>{props.family}</span>
                </div>
                <div>
                    <span className={style.infoItem}>Образование: </span>
                    <span className={style.infoItemText}>{props.education}</span>
                </div>
            </div>
            <div className={style.infoBtn}>Показать подробную информацию</div>
            <UserInfoBar/>
        </div>
    )
}

export default UserInfo;