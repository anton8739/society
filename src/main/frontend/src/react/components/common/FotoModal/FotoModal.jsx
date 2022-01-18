import React from 'react';
import style from './FotoModal.module.css';
import {NavLink, withRouter} from "react-router-dom";
import Modal from 'react-modal';
import ModalStyle from './FotoModalStyle';
import FotoBar from "./FotoBar/FotoBar";
import FotoData from "./FotoData/FotoData";
import {connect} from "react-redux";
import {getFotoById} from "../../../../redux/reducers/photosReducer";
import {compose} from "redux";



let mapStateToProps = (state) => {
    return {
        data: state.photos.currentFoto
    }
}

const FotoModal = (props) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    React.useEffect(() => {
        debugger
        props.getFotoById(props.id);
    }, [modalIsOpen])


    const openModal = () => {
        setIsOpen(true);
        document.body.style.overflow = 'hidden';
    }
    const closeModal = () => {
        setIsOpen(false);
        document.body.style.overflow = 'auto';
    }
    let Foto = props.children;
    return (
        <>
            <NavLink onClick={openModal} to={props.path + "/" + props.id}>
                {Foto}
            </NavLink>
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal}
                   style={ModalStyle}>
                <NavLink onClick={closeModal} to={props.path} className={style.close}>
                    <i className="fa fa-times" aria-hidden="true"></i>
                </NavLink>
                <div className={style.mainModal}>
                    <FotoBar img={props.data.img}/>
                    <FotoData data={props.data}/>
                </div>

            </Modal>
        </>


    )
}

export default compose(
    connect(mapStateToProps, {getFotoById})
)(FotoModal);