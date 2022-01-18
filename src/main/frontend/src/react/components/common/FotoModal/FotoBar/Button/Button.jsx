import React from 'react';
import style from './Button.module.css';

const Button = (props) => {
    return (
        <div className={style.btn}>
                <i className={props.icon} aria-hidden="true" ></i>

        </div>
    )
}

export default Button;