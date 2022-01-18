import React from 'react';
import style from './Music.module.css';
import LeftMenu from "../common/leftMenu/LeftMenu";
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";
import MusicBar from "./MusicBar/MusicBar";
import PlayerContainer from "./Player/PlayerContainer";
import {AuthHoc} from "../../../hoc/authHoc";

const Music = () => {
    return (
        <div className={style.main}>
            <Header/>
            <div className={style.content}>
                <div className={style.leftMenu}>
                    <LeftMenu/>
                </div>
                <div className={style.music}>
                    <PlayerContainer/>
                    <MusicBar/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default AuthHoc(Music);