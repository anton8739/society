import React from 'react';
import style from './NewsMenu.module.css';
import NewsMenuBtn from "./NewsMenuBtn/NewsMenuBtn";

const NewsMenu = () => {
    return (
        <div className={style.menu}>
            <NewsMenuBtn title="Все записи"/>
            <NewsMenuBtn title="Мои записи"/>
        </div>
    )
}

export default  NewsMenu;
