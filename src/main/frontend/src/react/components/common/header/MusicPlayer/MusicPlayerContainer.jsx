
import {connect} from "react-redux";
import React from 'react';
import MusicPlayer from "./MusicPlayer";
import {getCurrnetComposetion} from "../../../../../redux/selectors/musicSelector";
import {
    setClickedTime,
    setCurTime,
    setDuration,
    setPlaying,
    setVolume
} from "../../../../../redux/reducers/musicReducer";

let mapStateToProps = (state) =>  {
    return {
        currentComposetion: getCurrnetComposetion(state)
    }
}

export default connect (mapStateToProps, {setPlaying}) (MusicPlayer);