import React from 'react';
import { useState, useEffect } from "react";
import style from './Player.module.css';
import Audio from "./Audio/Audio";
import Play from "./Play/Play";
import Pause from "./Pause/Pause";
import Previos from "./Previos/Previos";
import Next from "./Next/Next";
import Volume from "./Volume/Volume";

const Player = (props) => {

    var {img, url,title,author,duration, curTime, playing,volume,clickedTime} = props.currentComposetion;

    useEffect(() => {
        console.log("done");
        const audio = document.getElementById("audio");


        const setAudioData = () => {
            props.setDuration(audio.duration);
            props.setCurTime(audio.currentTime);

        }
        const setAudioTime = () => props.setCurTime(audio.currentTime);

        // DOM listeners: update React state on DOM events
        if (!audio.duration) {
            audio.addEventListener("loadeddata", setAudioData);
        } else {
            if (duration !== audio.duration){
                setAudioData();
            }
        }
        audio.addEventListener("timeupdate", setAudioTime);
        if (clickedTime && clickedTime !== curTime) {
            audio.currentTime = clickedTime;
            props.setClickedTime(null);
        }
        audio.volume = volume;

        return () => {
            audio.removeEventListener("loadeddata", setAudioData);
            audio.removeEventListener("timeupdate", setAudioTime);
        }
    });
    return (
        <div className={style.player}>
            {playing ?
                <Pause handleClick={() => props.setPlaying(false)} /> :
                <Play handleClick={() => props.setPlaying(true)} />
            }
            <Previos/>
            <Next/>
            <Audio  duration={duration} curTime={curTime}  img={img} title={title} author={author} url={url}
                    onTimeUpdate={(time) => props.setClickedTime(time)}/>
            <Volume volume ={volume} setVolume={(volume) => { props.setVolume(volume)}}/>
        </div>
    )
}

export default Player;