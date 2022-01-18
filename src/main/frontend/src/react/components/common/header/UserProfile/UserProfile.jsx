import React from 'react';
import style from './userProfile.module.css';
import {connect} from "react-redux";
import {logOut} from "../../../../../redux/reducers/authReducer";
let mapStateToProps = (state) => {
    return {
        username : state.auth.username,
        img :state.auth.img
    }
}
const UserProfile = (props) => {

    let [opened, setOpened]=React.useState(false);


    let openPanel = () => {
        setOpened(!opened);
    }

    return (
       
            <div className={style.item} onMouseLeave={() => openPanel()}>
                <div className={style.username} onClick={() => openPanel()}>{props.username}</div>
                <img className={style.foto} onClick={() => openPanel()}
                     src={props.img}/>
                {opened ? (
                    <div className={style.hiddenMenu}>
                        <div className={style.hiddenItem}>Настройки</div>
                        <div className={style.hiddenItem}>Помощь</div>
                        <div className={style.hiddenItem} onClick={() => props.logOut() }>Выйти</div>
                    </div>
                ) : null
                }

            </div>
    );
}

export default connect(mapStateToProps, {logOut})(UserProfile);