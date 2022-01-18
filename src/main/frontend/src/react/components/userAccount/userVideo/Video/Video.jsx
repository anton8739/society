import React from 'react';
import style from './Video.module.css';

const Video = (props) => {
    console.log(props)
    debugger
    return(
        <>
            <div className={style.video}>
                <img className={style.imgVideo}
                     src={props.video.img}/>
            </div>
            <div className={style.description}>{props.video.title}</div>
        </>
    )
}

export default Video;