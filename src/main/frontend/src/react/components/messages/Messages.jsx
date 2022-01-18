import React from 'react';
import style from './Messages.module.css';
import LeftMenu from "../common/leftMenu/LeftMenu";
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";
import RightMenu from "./RightMenu/RightMenu";
import Dialogs from "./Dialogs/Dialogs";
import {AuthHoc} from "../../../hoc/authHoc";

const Messages = ()=> {
    return(
        <div className={style.main}>
            <Header/>
            <div className={style.content}>
                <div className={style.leftMenu}>
                    <LeftMenu/>
                </div>
                <div className={style.messages}>
                    <div className={style.dialogs}>
                        <Dialogs/>
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

export default AuthHoc(Messages);