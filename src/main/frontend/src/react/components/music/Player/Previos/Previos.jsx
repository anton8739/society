import React from 'react';
import style from './Previos.module.css';
import {setCurrentSong} from "../../../../../redux/reducers/musicReducer";
import {connect} from "react-redux";
let mapStateToProps = (state) => {
    return {
        currentPlayList : state.music.currentPlayList,
        currentComposetion : state.music.currentComposetion
    }
}
const Previos = (props) => {
    const setPrevios = () => {
        let list =props.currentPlayList;
        let index = list.findIndex( (element) => {
            return (element.id === props.currentComposetion.id);
        });
        index--;
        if (index < 0) {
            index=0;
        }
        let thisSong= {
            id : props.currentPlayList[index].id,
            img: props.currentPlayList[index].img,
            url: props.currentPlayList[index].url,
            title: props.currentPlayList[index].title,
            author: props.currentPlayList[index].author,
            duration: 1, curTime: 1, playing:  true, volume: 0.5, clickedTime: 1
        }
        props.setCurrentSong(thisSong);
    }
    return (
        <div onClick={() => setPrevios()} className={style.previos}>
            <i className="fa fa-step-backward" aria-hidden="true"></i>
        </div>
    )
}

export default connect (mapStateToProps, {setCurrentSong}) (Previos);