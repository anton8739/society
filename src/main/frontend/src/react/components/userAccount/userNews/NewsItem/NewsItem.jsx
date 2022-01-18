import React from 'react';
import style from './NewsItem.module.css';
import TopMenu from "./topMenu/TopMenu";
import BottumMenu from "./bottumMenu/BottumMenu";

const NewsItem = (props) => {
    return (
        <div className={style.item}>
                <TopMenu img={props.img} username={props.username} data={props.data}/>
                <img  className={style.foto} src={props.foto}/>
                <BottumMenu likes={props.likes} share={props.share} views={props.views}/>
        </div>)
}

export  default NewsItem;