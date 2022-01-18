import style from './MenuBtn.module.css';
import React from 'react';

const MenuBtn = () => {
    return(
        <div className={style.btn}>
            <i className="fa fa-bars" aria-hidden="true"></i>
        </div>
    )
}

export default MenuBtn;