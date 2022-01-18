import React from 'react';
import style from './Item.module.css';
import {NavLink} from "react-router-dom";
import VideoModal from "../../../common/VideoModal/VideoModal";

const Item = (props) => {
    return (
        <div className={style.item}>
            <VideoModal path="/video" id={props.video.id}>
                <div className={style.imgWrapper} style={{
                    backgroundImage: `url(${props.video.img})`}}>
                    <div className={style.hiddenMenu}>
                        <div className={style.hidden+" "+style.close}><i className="fa fa-times" aria-hidden="true"></i></div>
                        <div className={style.hidden+" "+style.play}><i className="fa fa-play-circle" aria-hidden="true"></i> </div>
                        <div className={style.time}>{props.video.time}</div>
                    </div>
                </div>
            </VideoModal>



            <div className={style.title}>{props.video.title}</div>
            <div className={style.author}>{props.video.author}</div>
            <div className={style.views}>{props.video.views}<span> просмотров</span></div>
            <div className={style.data}>{props.video.data}</div>
        </div>
    )
}

export default Item;