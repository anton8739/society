import React from 'react';

import style from './VideoPlayer.module.css';
import ReactPlayer from 'react-player'
import Volume from "./Volume/Volume";
import CurrentTime from "./CurrentTime/CurrentTime";
import screenfull from 'screenfull';
import moment from 'moment';
import {connect} from "react-redux";
import {chooseNextVideo} from "../../../../../redux/reducers/videoReducer";

let mapStateToProps = (state) => {
    return {
        currentVideo : state.video.currentVideo
    }
}
const VideoPlayer = (props) => {
    const [state, setState] = React.useState({
        playing: true,
        muted: true,
        volume: 50,
        isFullScreen : false,
        progress : 0,
        duration : 0,
    });
    let videoPlayerRef =React.useRef();
    let videoRef=React.useRef();
    let FormatedDuration= moment.duration(state.duration, "seconds").format('mm:ss', { trim: false });
    React.useEffect(() => {
        screenfull.onchange( (event) => {
            if (!state.isFullScreen) {
                videoPlayerRef.current.classList.add(style.fullscreen);
                setState({...state, isFullScreen :true})
            } else {
                videoPlayerRef.current.classList.remove(style.fullscreen);
                setState({...state, isFullScreen :false})
            }

        })
    });

    let handleDuration = (duration) => {
        setState({...state, duration: duration})
    }
    let onPlayingClick = () => {
        setState({...state, playing: !state.playing})
    }
    let onMutedClick = () => {
        setState({...state, muted: !state.muted})
    }
    let onVolumeChange = (event, newValue) => {
        setState({
            ...state, volume: newValue, muted: newValue !== 0 ? (false) : (true)
        })
    }
    let handleProgress = (event) => {
        setState({...state, progress: event.played})

    }
    let onCurrentTimeChange = (event,newValue) => {
        let val=parseFloat(newValue/100);
        if (val !==state.progress) {
            videoRef.current.seekTo(val);
            setState({...state, progress : val});

        }

    }
    let toggleFullScreen = () => {
        screenfull.toggle(videoPlayerRef.current);

    }
    return (
        <div  ref={videoPlayerRef} className={style.videoPlayer} >

            <ReactPlayer
                ref={videoRef}
                className='player'
                width={"100%"}
                height={"100%"}
                url={props.currentVideo.url}
                playing={state.playing}
                muted={state.muted}
                volume={state.volume / 100}
                onProgress={handleProgress}
                onDuration={handleDuration}
            />
            <div className={style.controls}>
                <div className={style.topMenu}>
                    <div className={style.topTab}>
                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                    </div>
                    <div className={style.topTab}>
                        <i className="fa fa-share" aria-hidden="true"></i>
                    </div>

                </div>
                <div className={style.bottomMenu}>

                    <div className={style.bottomMenuBtn} onClick={() => onPlayingClick()}>
                        {state.playing ? (
                            <i className="fa fa-pause" aria-hidden="true"></i>
                        ) : (
                            <i className="fa fa-play" aria-hidden="true"></i>
                        )}
                    </div>
                    <div className={style.bottomMenuBtn} onClick={() => props.chooseNextVideo(props.currentVideo.id)}>
                        <i className="fa fa-step-forward" aria-hidden="true"></i>
                    </div>
                    <CurrentTime duration={state.duration} progress={state.progress}  onCurrentTimeChange={onCurrentTimeChange}/>
                    <div className={style.bottomMenuBtn} onClick={() => onMutedClick()}>
                        {state.muted ? (
                                <i className="fa fa-volume-off" aria-hidden="true"></i>
                            ) :
                            (<i className="fa fa-volume-down" aria-hidden="true"></i>)}
                    </div>
                    <div className={style.duration}>
                        {FormatedDuration}
                    </div>
                    <div className={style.volume}>
                        <Volume volume={state.volume} onVolumeChange={onVolumeChange}/>
                    </div>
                    <div className={style.bottomMenuBtn}>
                        <i className="fa fa-cog" aria-hidden="true"></i>
                    </div>
                    <div className={style.bottomMenuBtn} onClick={() => toggleFullScreen()}>
                        <i className="fa fa-arrows-alt" aria-hidden="true"></i>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default connect(mapStateToProps, {chooseNextVideo})(VideoPlayer);