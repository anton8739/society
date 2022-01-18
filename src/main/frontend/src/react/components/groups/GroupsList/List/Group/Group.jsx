import React from 'react';
import style from './Group.module.css';

const Group = (props) => {
    return (
        <div className={style.group}>
            <img className={style.img} src={props.group.img}/>
            <div>
                <div className={style.groupTitle}>
                    {props.group.groupTitle}
                </div>
                <div className={style.description}>
                    {props.group.description}
                </div>
                <div className={style.members}>
                    <span>{props.group.members}</span> <span> участников</span>
                </div>
            </div>
            <div className={style.groupMenu}>
                <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
            </div>
        </div>
    )
}

export default Group;