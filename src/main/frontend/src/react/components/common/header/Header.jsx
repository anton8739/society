import React, {useState} from 'react';
import style from  './Header.module.css';
import Logo from "./Logo/Logo";
import Search from "./Search/Search";
import UserProfile from "./UserProfile/UserProfile";
import MenuBtn from "./MenuBtn/MenuBtn";
import MusicPlayerContainer from "./MusicPlayer/MusicPlayerContainer";

const Header = (props) => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const windowResize = () => {
        setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', windowResize);
    let fotos=null;
    let flag=false;
    if (windowWidth <1000){
      flag=true;
    } else {
        flag=false;
    }
    return (
        <div className={style.header}>
            {flag ? <MenuBtn/> : <><Logo/>
                <Search/></>}
            <MusicPlayerContainer/>
            <UserProfile/>
        </div>
    )
}

export default Header;