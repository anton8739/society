import React from 'react';
import style from './Year.module.css';
import Photo from "./Photo/Photo";

const Year = (props) => {
    let photos = props.photos.map(photo => <Photo photo={photo}/>)
    return (
        <div>
            <div className={style.year}>
                <span>{props.year}</span>
                <span> год</span>
                </div>
            <div className={style.fotos}>
                {photos}
            </div>

        </div>
    )
}

export default Year;