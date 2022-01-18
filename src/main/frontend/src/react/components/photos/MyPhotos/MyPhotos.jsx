import React from 'react';
import style from './MyPhotos.module.css';
import MenuContainer from "./Menu/MenuContainer";
import PhotosBarContainer from "./PhotosBar/PhotosBarContainer";

const MyPhotos = () => {
    return (
        <div>
            <MenuContainer/>
            <PhotosBarContainer/>
        </div>
    )
}

export default MyPhotos;