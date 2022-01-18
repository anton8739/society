import React from 'react';
import style from './Search.module.css';

const Search = (props) => {
    return (
            <div className={style.item}>
                <i className="fa fa-search" aria-hidden="true"></i>
                <input type="text" placeholder="Поиск"/>
            </div>

    )
}

export default Search;