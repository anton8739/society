import React from 'react';
import style from './FotoBar.module.css';
import Button from "./Button/Button";
import Foto from "./Foto/Foto";
import BottumMenu from "./BottumMenu/BottumMenu";

const FotoBar = (props) => {
    return (
        <div className={style.fotoBar}>
            <div className={style.fotoPart}>
                <div className={style.btns}>
                    <Button icon="fa fa-arrow-left"/>
                </div>
                <div className={style.foto}>
                    <Foto img={props.img}/>
                </div>

                <div className={style.btns}>
                    <Button icon="fa fa-arrow-right"/>
                </div>
            </div>
            <BottumMenu/>
        </div>
    )
}

export default FotoBar;
