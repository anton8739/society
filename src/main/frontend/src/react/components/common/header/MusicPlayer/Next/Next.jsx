import React from 'react';
import style from './Next.module.css';
import {connect} from "react-redux";
import {setCurrentSong} from "../../../../../../redux/reducers/musicReducer";

let mapStateToProps = (state) => {
    return {
        currentPlayList : state.music.currentPlayList,
        currentComposetion : state.music.currentComposetion
    }
}
const Next = (props) => {

    const setNext = () => {
        let list =props.currentPlayList;
        let index = list.findIndex( (element) => {
            return (element.id === props.currentComposetion.id);
        });
        index++;
        if (index > list.length-1) {
            index=list.length-1;
        }
        let thisSong= {
            id : props.currentPlayList[index].id,
            img: props.currentPlayList[index].img,
            url: props.currentPlayList[index].url,
            title: props.currentPlayList[index].title,
            author: props.currentPlayList[index].author,
            duration: 1, curTime: 1, playing:  true, volume: 0.5, clickedTime: null
        }
        props.setCurrentSong(thisSong);
    }

    return (
        <i  onClick={() => setNext()} className="fa fa-step-forward" aria-hidden="true"></i>
    )
}

export default connect (mapStateToProps, {setCurrentSong}) (Next);