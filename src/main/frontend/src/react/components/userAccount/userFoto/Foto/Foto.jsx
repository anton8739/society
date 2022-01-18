import React from 'react';
import style from './Foto.module.css';
import FotoModal from "../../../common/FotoModal/FotoModal";

const Foto = (props) => {
    return (
        <FotoModal path="/account" id={props.foto.id}>
            <img className={style.foto} src={props.foto.url}/>
        </FotoModal>
    )
}

export default Foto;