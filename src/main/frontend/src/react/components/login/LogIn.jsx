import React from 'react';

import style from './login.module.css';
import LeftMenu from "../common/leftMenu/LeftMenu";
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";
import GuestHeader from "../common/guestHeader/GuestHeader";
import RecentUser from "./RecentUser/RecentUser";
import DownloadApplication from "./DownloadApplication/DownloadAppliaction";
import LoginForm from "./LoginForm/LoginForm";
import RegistrationForm from "./RegistrationForm/RegistrationForm";

const LogIn = () => {
    return (
        <div className={style.main}>
            <GuestHeader/>
            <div className={style.content}>

                    <div className={style.leftPart}>
                        <RecentUser/>
                        <DownloadApplication/>
                    </div>
                    <div className={style.rightPart}>
                        <LoginForm/>
                        <RegistrationForm/>
                    </div>
                </div>
            <Footer/>
        </div>
    )
}

export default LogIn;