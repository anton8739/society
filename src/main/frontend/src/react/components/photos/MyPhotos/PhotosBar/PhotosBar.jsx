import React from 'react';
import style from './PhotosBar.module.css';
import Year from "./Year/Year";

const PhotoBar = (props) => {
    React.useEffect( () => {
        props.getFotoListbyUserId(props.currentUserId);
    }, [])
    let myPhotos =props.MyPhotos.map(item => <Year year={item.year} photos={item.photos}/>)
    return (
        <div className={style.bar}>
            {myPhotos}
        </div>
    )
}

export default PhotoBar;