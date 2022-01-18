import React from 'react';
import style from './Volume.module.css';

const Volume = (props) => {

    const volumeBar =React.useRef();
    let curPercentage = props.volume *100;
    const culcVolume = (e) => {
        const barStart=volumeBar.current.offsetLeft;
        const barWidth = volumeBar.current.offsetWidth;
        const clickPositionInBar =e.clientX-barStart;
        let volumePercent = clickPositionInBar / barWidth;
        if (volumePercent  < 0) {
            volumePercent =0;
        } else if (volumePercent  >1) {
            volumePercent  =1;
        }
        return volumePercent ;
    }
    const setVolume = (e) => {
        props.setVolume(culcVolume(e));
    }
    return (
            <div ref={volumeBar} className={style.currentVolume} onMouseDown={e => setVolume(e)} style={{
                background: `linear-gradient(to right, #3e6fa3 ${curPercentage}%, #a0a6af 0)`
            }}></div>
    )
}

export default Volume;
