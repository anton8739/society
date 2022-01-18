import React from 'react';
import style from './VideoData.module.css';
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        currentVideo: state.video.currentVideo
    }
}
const VideoData = (props) => {
    return (
        <div className={style.videoData}>
            <div className={style.firstRow}>
                <div className={style.title}>{props.currentVideo.title}</div>
                <div className={style.views}>

                    <span> {props.currentVideo.views}</span>
                    <span> просмотров</span>
                </div>
            </div>
            <div className={style.secondRow}>
                <div className={style.likes}>
                    <span><i className="fa fa-heart-o" aria-hidden="true"></i></span>
                    <span>{props.currentVideo.likes}</span>
                </div>
                <div>
                    <i className="fa fa-share" aria-hidden="true"></i>
                    <span> Поделиться</span>
                </div>
                <div>
                    <i className="fa fa-check" aria-hidden="true"></i>
                    <span> Добавлено</span>
                </div>
                <div>Еще</div>
            </div>
            <div className={style.thirdRow}>
                <img className={style.authorIcon} src={props.currentVideo.aurthorIcon}/>
                <div className={style.authorData}>
                    <div className={style.author}>{props.currentVideo.author}</div>
                    <div className={style.data}>{props.currentVideo.data}</div>
                </div>

                <div className={style.followBtn}>
                    <i className="fa fa-plus" aria-hidden="true"></i>
                    <span>
                    Подписаться
                </span>
                </div>
            </div>

        </div>
    )
}

export default connect(mapStateToProps, {})(VideoData);