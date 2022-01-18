import React, {useState, useEffect,useRef} from 'react';
import isEqual from 'lodash/isEqual';
import style from './userFoto.module.css';
import Foto from "./Foto/Foto";

const UserFoto = (props) => {

    useEffect( () => {
        props.getFotoListByUserId(props.currentUserId);
    },[]);


    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const windowResize = () => {
        setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', windowResize);
    let fotos = null;
    if (windowWidth < 1250) {
        fotos = props.fotos.map(foto => <Foto foto={foto}/>).slice(0, 2);
    } else {
        fotos = props.fotos.map(foto => <Foto foto={foto}/>);
    }

    return (
        <div className={style.main}>
            <div className={style.numVideo}>
                <span>Мои фотографии</span>
                <span className={style.num}> {props.fotos.length}</span>
            </div>
            <div className={style.fotoBlock}>
                {fotos}

            </div>
        </div>
    )
}

function usePrevious(value) {

    const ref = useRef();

    useEffect(() => {
        ref.current = value;
    }, [value]);
    return ref.current;
}

export default UserFoto;