import React, {useState} from 'react';
import UserIconContainer from "./userIcon/UserIconContainer";
import Header from "../common/header/Header";
import LeftMenu from "../common/leftMenu/LeftMenu";
import Footer from "../common/footer/Footer";
import style from './userAccount.module.css'
import UserFotoContainer from "./userFoto/UserFotoContainer";
import UserFriendsContainer from "./userFriends/UserFriendsContainer";
import UserMusicContainer from "./userMusic/UserMusicContainer";
import UserNewsContainer from "./userNews/UserNewsContainer";
import UserVideoContainer from "./userVideo/UserVideoContainer";
import UserInfoContainer from "./userInfo/UserInfoContainer";
import Cookies from 'universal-cookie';
import Preloader from "../common/Preloader/Preloader";

let cookies = new Cookies();
const UserAccount = (props) => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const windowResize = () => {
        setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', windowResize);
    let fotos=null;
    let flag=false;
    if (windowWidth <700){
        flag=true;
    } else {
        flag=false;
    }
    React.useEffect(()=> {
        let id=props.match.params.userId;
        debugger;
        console.log(props.fetching);
        if(!id){

            props.getUserById(cookies.get('loginedUser').id);


        } else {

            props.getUserById(id);
        }
    },[]);

    return (
        <div className={style.main}>
            <Header/>
            <div className={style.content}>
            <div className={style.leftMenu}>
                <LeftMenu/>
            </div>
                {
                    props.fetching ? (
                    <div className={style.preloader}>
                        <Preloader/>
                    </div>
                ) :
                    (
                    <div className={style.userAccount}>
                        {flag ?
                            <>
                                <div className={style.leftColumn} >
                                    <UserIconContainer/>
                                    <UserInfoContainer/>
                                    <UserFriendsContainer mainText="Друзья" numberOfFriends="168"/>
                                    <UserFotoContainer/>
                                    <UserNewsContainer/>

                                </div>

                            </> :
                            <>
                                <div className={style.leftColumn} >
                                    <UserIconContainer/>
                                    <UserFriendsContainer mainText="Друзья" numberOfFriends="168"/>
                                    <UserFriendsContainer mainText="Друзья онлайн" numberOfFriends="137"/>
                                    <UserVideoContainer/>
                                    <UserMusicContainer/>
                                </div>
                                <div className={style.rightColumn}>
                                    <div>
                                        <UserInfoContainer/>
                                    </div>
                                    <div>
                                        <UserFotoContainer/>
                                    </div>
                                    <div>
                                        <UserNewsContainer/>
                                    </div>
                                </div>
                            </>}
                    </div>
                )}

            </div>
            <Footer/>

        </div>
    );
}

export default UserAccount;