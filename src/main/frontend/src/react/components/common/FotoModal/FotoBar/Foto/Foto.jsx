import React from 'react';

import style from './Foto.module.css';

const Foto = (props) => {
    return (
            <img src={props.img} className={style.img}/>

    )
}

export default Foto;
