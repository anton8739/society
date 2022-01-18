import React from 'react';
import style from './userVideo.module.css';
import Video from "./Video/Video";


const UserVideo = (props) => {

    React.useEffect(() => {
        props.getVideoListByUserId(props.currentUserId);
    }, []);
    let videos=props.videoList.slice(0,2).map(video => <Video video={video}/>)
    return (
        <div className={style.main}>
            <div className={style.numVideo}>
                <span>Видеозаписи</span>
                <span className={style.num}> {props.videoList.length}</span>
            </div>
            {videos}


        </div>
    )
}

export default UserVideo;