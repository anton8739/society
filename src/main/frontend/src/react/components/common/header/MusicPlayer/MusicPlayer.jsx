import React from 'react';
import style from './musicPlayer.module.css';
import Previos from "./Previos/Previos";
import Next from "./Next/Next";

const MusicPlayer = (props) => {

    var {id,img, url, title, author, duration, curTime, playing, volume, clickedTime} = props.currentComposetion;

    return (

        <div className={style.player}>

            <Previos/>
            {playing ? <i onClick={() => props.setPlaying(false)} className="fa fa-pause-circle" aria-hidden="true"></i> :
                <i onClick={() => props.setPlaying(true)}  className="fa fa-play-circle" aria-hidden="true"></i>}
            <Next/>
            <div className={style.text}>{title}, {author}</div>
        </div>
    );
}

export default MusicPlayer;
