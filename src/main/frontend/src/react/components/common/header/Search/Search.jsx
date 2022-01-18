import React from 'react';
import style from './search.module.css';

const Search = () => {
    return (
        <div>
        <div className={style.item}>
            <i className="fa fa-search" aria-hidden="true"></i>
            <input type="text" placeholder="Поиск"/>
        </div>
        </div>
    );
}

export default Search;