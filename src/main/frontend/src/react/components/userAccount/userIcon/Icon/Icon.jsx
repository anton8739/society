import React from 'react';

import style from './Icon.module.css';
import FotoModal from "../../../common/FotoModal/FotoModal";

const Icon = (props) => {
    return (
        <FotoModal path="/account" id={"12"}>
            <img className={style.foto} src={props.img}/>
        </FotoModal>
    )
}

export default Icon;