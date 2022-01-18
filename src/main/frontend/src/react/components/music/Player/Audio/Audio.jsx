import React from 'react';
import style from './Audio.module.css';
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";

const Audio = (props) => {
    const progressBar =React.useRef();
    const { duration, curTime, img, title, author, url, onTimeUpdate} = props;

    const curPercentage = (curTime / duration) * 100;

    const formatDuration = (duration) => {
        return moment
            .duration(duration, "seconds")
            .format("mm:ss", { trim: false });
    }
    const calcClickedTime = (e) => {
        const clickPositionInPage = e.pageX;
        const barStart=progressBar.current.offsetLeft;
        const barWidth = progressBar.current.offsetWidth;
        const clickPositionInBar =e.clientX-barStart;
        const timePerPixel = duration / barWidth;
        let resultTime =timePerPixel * clickPositionInBar;
        if (resultTime < 0) {
            resultTime=0;
        } else if (resultTime >duration) {
            resultTime =duration;
        }
        return resultTime;
    }

    const handleTimeDrag = (e) => {
        onTimeUpdate(calcClickedTime(e));
        console.log (calcClickedTime(e));
    }

    return (
        <div >
            <div className={style.bar}>
                <img className={style.img} src={img}/>
                <div className={style.title}>{title}</div>
                <div className={style.author}>{author}</div>
                <div className={style.duration}>{formatDuration(duration)}</div>
                <div ref={progressBar} className={style.progressBar} onMouseDown={e => handleTimeDrag(e)} style={{
                    background: `linear-gradient(to right, #3e6fa3 ${curPercentage}%, #a0a6af 0)`
                }}></div>

            </div>
        </div>
    )
}

export default Audio;