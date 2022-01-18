import React from 'react';
import style from './FriendsMusic.module.css';
import Friend from "./Friend/Friend";
import Search from "./Search/Search";


const FriendsMusic = (props) => {

    React.useEffect(() => {
        props.getFriendsListForMusicPage(props.currentUserId);
    }, []);

    let friends =props.friends.map(friend => <Friend friend={friend}/>)
    return (
        <div className={style.main}>
            <Search/>
            {friends}
            <div className={style.showMore}>Показать других</div>
        </div>
    )

}

export default FriendsMusic;