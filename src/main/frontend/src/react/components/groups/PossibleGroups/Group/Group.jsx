import React from 'react';
import style from './Group.module.css';

const Group = (props) => {
    return (
        <div className={style.group}>
            <img className={style.img} src={props.group.img}/>
            <div className={style.info}>
                <div className={style.groupTitle}>
                    {props.group.groupTitle}
                </div>
                <div className={style.description}>
                    <span>{props.group.description}</span>
                </div>
                <div className={style.addToGroups}>
                    <span><i className="fa fa-plus" aria-hidden="true"></i></span>
                    <span>Подписаться</span>
                </div>
            </div>
        </div>
    )
}

export default Group;