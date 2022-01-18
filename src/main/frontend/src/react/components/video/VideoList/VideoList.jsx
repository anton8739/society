import React from 'react';

import style from './VideoList.module.css';
import Item from "./Item/Item";

const VideoList = (props) => {
    React.useEffect(() => {
        props.getVideoListByUserId(props.currentUserId);
    })
    let videos = props.videoList.map(video => <Item video={video}/>)
    return (
        <div className={style.list}>
            {videos}
        </div>
    )
}

export default VideoList;