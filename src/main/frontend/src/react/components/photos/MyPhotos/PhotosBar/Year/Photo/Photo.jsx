import React from 'react';
import style from './Photo.module.css'

const Photo = (props) => {
    return (
        <div>
           <img className={style.img} src={props.photo.url}/>
        </div>
    )
}

export default Photo;