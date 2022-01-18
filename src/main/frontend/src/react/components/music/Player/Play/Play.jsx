import React from 'react';
import style from './Play.module.css';

const Play = (props) => {
    return (
        <div className={style.play} onClick={() => props.handleClick()}>
            <i className="fa fa-play-circle" aria-hidden="true"></i>
        </div>
    )
}

export default Play;