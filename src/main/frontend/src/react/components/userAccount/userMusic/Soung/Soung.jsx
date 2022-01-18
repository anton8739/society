import React from 'react';

import style from './Soung.module.css';
const Soung = (props) => {
    let title =props.title;
    if (title.length > 22) {
        title = title.substr(0, 22)+"..."
    }
    return (
        <div className={style.item}>
            <img className={style.img} src={props.img}/>
            <div>
                <div className={style.title}>{title}</div>
                <div className={style.author}>{props.author}</div>
            </div>

        </div>
    )
}

export default Soung;