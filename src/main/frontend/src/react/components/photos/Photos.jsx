import React from 'react';
import style from './Photos.module.css'
import LeftMenu from "../common/leftMenu/LeftMenu";
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";
import MyAlbums from "./MyAlbums/MyAlbums";
import MyPhotos from "./MyPhotos/MyPhotos";
import {AuthHoc} from "../../../hoc/authHoc";

const Photos = () => {
    return (
        <div className={style.main}>
            <Header/>
            <div className={style.content}>
                <div className={style.leftMenu}>
                    <LeftMenu/>
                </div>
                <div className={style.photos}>
                    <MyAlbums/>
                    <MyPhotos/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default AuthHoc(Photos);