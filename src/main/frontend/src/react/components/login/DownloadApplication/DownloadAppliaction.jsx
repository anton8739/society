import React from 'react';

import style from './DownloadApplication.module.css';

const DownloadApplication = () => {
    return (
        <div  className={style.main}>
            <div>
                <div className={style.h1}>ВКонтакте для мобильных устройств</div>
                <div className={style.h2}>Скачать для iPhone или Android</div>
            </div>
                <img className={style.img} src="https://vk.com/images/login/compact_mobile_promo.png"/>

        </div>
    )
}
export default  DownloadApplication;