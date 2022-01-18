import React from 'react';
import style from './NewsBar.module.css';
import NewsBarItem from "./NewsBarItem/NewsBarItem";

const NewsBar = (props) => {

    let News = props.news.map( story => <NewsBarItem story={story}/>)
    return (
        <div className={style.bar}>
            {News}
        </div>
    )
}

export default NewsBar;