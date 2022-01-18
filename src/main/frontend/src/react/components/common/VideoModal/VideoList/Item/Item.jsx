import React from 'react';

import style from './Item.module.css';
import screenfull from "screenfull/dist/screenfull";

const Item = (props) => {
    let itemRef =React.useRef();
    React.useEffect(() => {
        if (props.currentVideo.id === props.video.id){
            itemRef.current.classList.add(style.selected);

        } else {
            itemRef.current.classList.remove(style.selected);
        }
    });

    let playThisVideo = (id) => {
        props.setCurrentVideo(id);
    }
    return(
        <div ref={itemRef} className={style.item} onClick={() => playThisVideo(props.video.id)}>
                <div className={style.imgWrapper} style={{
                    backgroundImage: `url(${props.video.img})`}}>
                    <div className={style.hiddenMenu}>
                        <div className={style.time}>{props.video.time}</div>
                    </div>
                </div>
            <div>
                <div className={style.title}>{props.video.title}</div>
                <div className={style.views}>{props.video.views}<span> просмотров</span></div>
            </div>
        </div>
    )
}

export default Item;
