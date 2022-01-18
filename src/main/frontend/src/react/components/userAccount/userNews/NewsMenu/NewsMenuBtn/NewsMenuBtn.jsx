import  React from 'react';
import style from './NewsMenuBtn.module.css';

const NewsMenuBtn = (props) => {
    return (
        <div className={style.btn}>
            {props.title}
        </div>
    )
}

export default  NewsMenuBtn;