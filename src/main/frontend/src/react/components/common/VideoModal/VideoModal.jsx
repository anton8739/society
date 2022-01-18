import React from 'react';
import style from './VideoModal.module.css';
import {NavLink, withRouter} from "react-router-dom";
import Modal from 'react-modal';
import ModalStyle from './VideoModalStyle';
import VideoPlayer from "./VideoPlayer/VideoPlayer";
import VideoList from "./VideoList/VideoList";
import VideoData from "./VideoData/VideoData";

const VideoModal = (props) => {


    let data = {
        currentUserImg: 'https://sun9-15.userapi.com/impf/c846419/v846419721/4085a/0PD502A81Ts.jpg?size=560x960&quality=96&sign=977f3817b9a6e126e647ecfa73707799&type=album',
        img: 'https://sun9-15.userapi.com/impf/c846419/v846419721/4085a/0PD502A81Ts.jpg?size=560x960&quality=96&sign=977f3817b9a6e126e647ecfa73707799&type=album',
        numberOfFoto: 21,
        likes: 1,
        share: 3,
        data: '3 мая 2018',
        user: {
            username: 'Антон Юровский',
            img: 'https://sun9-15.userapi.com/impf/c846419/v846419721/4085a/0PD502A81Ts.jpg?size=560x960&quality=96&sign=977f3817b9a6e126e647ecfa73707799&type=album'
        },

        commentList: [
            {
                id: 1,
                username: 'Денис Добрый ',
                text: 'Лакшери лайв, ласковый Тоха))',
                data: '4 мая 2018',
                img: 'https://sun2.beltelecom-by-minsk.userapi.com/s/v1/if1/ggVjlRXaU5sWHmhG86gzK1tsNLW0Yo_DgXD87ChwTdBjvFclbmKEqHcgf3vA6qBlNbTv0QmU.jpg?size=50x0&quality=96&crop=189,0,1989,1989&ava=1'
            },
            {
                id: 2,
                username: 'Денис Добрый ',
                text: 'Лакшери лайв, ласковый Тоха))',
                data: '4 мая 2018',
                img: 'https://sun2.beltelecom-by-minsk.userapi.com/s/v1/if1/ggVjlRXaU5sWHmhG86gzK1tsNLW0Yo_DgXD87ChwTdBjvFclbmKEqHcgf3vA6qBlNbTv0QmU.jpg?size=50x0&quality=96&crop=189,0,1989,1989&ava=1'
            },
        ]
    }


    const [modalIsOpen, setIsOpen] = React.useState(false);
    const openModal = () => {
        setIsOpen(true);
        document.body.style.overflow = 'hidden';
    }
    const closeModal = () => {
        setIsOpen(false);
        document.body.style.overflow = 'auto';
    }
    let Video = props.children;
    return (
        <>
            <NavLink onClick={openModal} to={props.path + "?videoId=" + props.id}>
                {Video}
            </NavLink>
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal}
                   style={ModalStyle}>
                <NavLink onClick={closeModal} to={props.path} className={style.close}>
                    <i className="fa fa-times" aria-hidden="true"></i>
                </NavLink>
                <div className={style.mainModal}>

                    <VideoPlayer/>


                    <div className={style.videoList}>
                        <div className={style.videoListTitle}>Мои видео</div>
                        <VideoList/>
                    </div>

                    <VideoData/>


                </div>

            </Modal>
        </>


    )
}

export default VideoModal;