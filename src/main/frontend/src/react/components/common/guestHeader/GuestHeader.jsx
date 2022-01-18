import React, {useState} from 'react';
import style from './GuestHeader.module.css';
import Logo from "../header/Logo/Logo";
import Search from "../header/Search/Search";


const GuestHeader = (props) => {


    return (
        <div className={style.header}>
            <Logo/>
            <Search/>
        </div>
    )
}

export default GuestHeader;