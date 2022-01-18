import React from 'react';
import style from './Video.module.css';
import LeftMenu from "../common/leftMenu/LeftMenu";
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";
import TopMenu from "./TopMenu/TopMenu";
import Search from "./Search/Search";
import VideoListContainer from "./VideoList/VideoListContainer";
import {AuthHoc} from "../../../hoc/authHoc";


const Video = ()=> {
    return(
        <div className={style.main}>
            <Header/>
            <div className={style.content}>
                <div className={style.leftMenu}>
                    <LeftMenu/>
                </div>
                <div className={style.video}>
                    <TopMenu/>
                    <Search/>
                    <VideoListContainer/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default AuthHoc(Video);