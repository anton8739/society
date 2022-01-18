import React from 'react';
import style from './Pause.module.css';

const Pause = (props) => {
    return (
        <div className={style.pause} onClick={() => props.handleClick()}>
            <i className="fa fa-pause-circle" aria-hidden="true"></i>
        </div>
    )
}

export default Pause;