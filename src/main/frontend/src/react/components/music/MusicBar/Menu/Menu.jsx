import React from 'react';
import style from './Menu.module.css';

const Menu = () => {
    return (
        <div className={style.menu}>
            <div activeClassName={style.active} to="/friends/my/1" className={style.item}>Мои музыка</div>
        </div>
    )

}

export default Menu;