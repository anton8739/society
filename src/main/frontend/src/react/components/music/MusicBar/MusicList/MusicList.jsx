import React from 'react';
import style from './MusicList.module.css';
import Song from "./Song/Song";
import Cookies from "universal-cookie";
let cookies = new Cookies();
const MusicList = (props) => {
    React.useEffect(()=> {
        props.getCurrentPlayListByUserId(cookies.get('loginedUser').id);
    },[]);
    React.useEffect(()=> {
        if (props.currentComposetion.id <0 && props.currentPlayList[0].id >0){
            console.log("++")
            console.log(props.currentPlayList[0]);
            let firstSong= {
                id : props.currentPlayList[0].id,
                img: props.currentPlayList[0].img,
                url: props.currentPlayList[0].url,
                title: props.currentPlayList[0].title,
                author: props.currentPlayList[0].author,
                duration: 1, curTime: 1, playing:  false, volume: 0.5, clickedTime: 1
            }
            props.setCurrentSong(firstSong)
        }
    }, [props.currentPlayList[0].id])
    let songs = props.currentPlayList.map(song => <Song currentComposetion={props.currentComposetion} setCurrentSong={props.setCurrentSong} song={song}/>)
    return (
        <div className={style.list}>
            <div className={style.topMenu}>
                <span className={style.topMenuText}>Аудиозаписи</span>
                <span className={style.topMenuBtn}>
                    по умолчанию
                <i className="fa fa-arrow-down" aria-hidden="true"></i>
                </span>
            </div>
            <div>
                <div className={style.random}>
                    <i className="fa fa-random" aria-hidden="true"></i>
                    <span> Перемешать все</span></div>
                {songs}
            </div>

        </div>
    )

}

export default MusicList;