import React, {useState, useEffect} from 'react';
import style from './userFriens.module.css';
import FriendItem from "./FriendItem/FriendItem";
import { Carousel } from 'react-responsive-carousel';
const UserFriends = (props) => {

    useEffect( () => {
        props.getFriendsListByUserId(props.currentUserId);
    }, []);




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

        let friends = props.friendList.map( friend => <FriendItem userFoto={friend.img} userName={friend.name}/>)
    return (
        <div className={style.main}>
            <div className={style.numFriennds}>
                <span>{props.mainText}</span>
                <span className={style.num}> {props.friendList.length}</span>
            </div>
            {flag ? <>
                <div className={style.friendsBlock}>
                    {friends}
                </div>
                </> :
                <>
                    <div className={style.friendsBlock}>
                        {friends}
                    </div>
            </>}


        </div>
    )
}

export default UserFriends;