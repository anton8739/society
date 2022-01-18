import React from 'react';
import style from './userMusic.module.css';
import Soung from "./Soung/Soung";


const UserMusic = (props) => {
    React.useEffect(()=> {
        props.getAudioListByUserId(props.currentUserId);
    }, []);
    let audio =props.audioList.slice(0,3).map(song => <Soung
        author={song.author} title={song.title} img={song.img}/>)
    return (
        <div className={style.main}>
            <div className={style.numVideo}>
                <span>Аудиозаписи</span>
                <span className={style.num}> {props.audioList.length}</span>
            </div>
            {audio}
        </div>
    )
}

export default UserMusic;