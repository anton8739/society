import React from 'react';
import style from './News.module.css'
import LeftMenu from "../common/leftMenu/LeftMenu";
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";
import RightMenu from "./RightMenu/RightMenu";
import NewsBarContainer from "./NewsBar/NewsBarContainer";
import {AuthHoc} from "../../../hoc/authHoc";

const News = () => {
    return (
        <div className={style.main}>
            <Header/>
            <div className={style.content}>
                <div className={style.leftMenu}>
                    <LeftMenu/>
                </div>
                <div className={style.news}>
                    <div className={style.newsBar}>
                        <NewsBarContainer/>
                    </div>
                    <div className={style.rightMenu}>
                        <RightMenu/>
                    </div>


                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default AuthHoc(News);