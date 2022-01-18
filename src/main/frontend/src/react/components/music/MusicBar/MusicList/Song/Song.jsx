import React from 'react';
import style from './Song.module.css'

const Song = (props) => {

    let playThisSong = (song) => {
        let thisSong= {
            id : song.id,
            img: song.img,
            url: song.url,
            title: song.title,
            author: song.author,
            duration: 1, curTime: 1, playing:  true, volume: 0.5, clickedTime: 1
        }
        props.setCurrentSong(thisSong);

    }
    return (
        <div className={`${style.song } ${props.song.id === props.currentComposetion.id ? style.active : ""} `} onClick={ () => playThisSong(props.song)}>
            <img className={style.img} src={props.song.img}/>
            <div className={style.songContext}>
                <div className={style.title}>{props.song.title}</div>
                <div className={style.author}>{props.song.author}</div>
            </div>

            <div className={style.time}>{props.song.time}</div>
        </div>
    )
}

export default Song;