import React from 'react';

import style from './VideoList.module.css';
import {connect} from "react-redux";
import Item from "./Item/Item";
import {setCurrentVideo} from "../../../../../redux/reducers/videoReducer";

let mapStateToProps = (state) =>  {
    return {
        videoList : state.video.videoList,
        currentVideo : state.video.currentVideo
    }
}

const VideoList = (props) => {

    let list=props.videoList.map(video => <Item
        currentVideo={props.currentVideo}
        video={video}
        setCurrentVideo={props.setCurrentVideo}
    />);

    return (
        <div className={style.scrollbar} id="style-2">
            <div className={style.forceOverflow}>
                {list}
            </div>
        </div>
    )
}

export default connect(mapStateToProps, {setCurrentVideo})(VideoList);