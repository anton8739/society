import React from 'react';
import style from './Groups.module.css'
import LeftMenu from "../common/leftMenu/LeftMenu";
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";
import GroupsList from "./GroupsList/GroupsList";
import RightMenu from "./RightMenu/RightMenu";
import PossibleFriendsContainer from "./PossibleGroups/PossibleGroupsContainer";
import {AuthHoc} from "../../../hoc/authHoc";


const Groups = () => {
    return (
        <div className={style.main}>
            <Header/>
            <div className={style.content}>
                <div className={style.leftMenu}>
                    <LeftMenu/>
                </div>
                <div className={style.groups}>
                    <div className={style.groupsList}>
                        <GroupsList/>
                    </div>
                    <div className={style.rightMenu}>
                        <RightMenu/>
                    </div>
                    <div className={style.possibleGroups}>
                        <PossibleFriendsContainer/>
                    </div>

                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default AuthHoc(Groups);