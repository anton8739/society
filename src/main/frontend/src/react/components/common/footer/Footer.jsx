import style from  './Footer.module.css';

const Footer = (props) => {
    return (
        <div className={style.footer}>
            <div className={style.text}>
                CopyRight <i className="fa fa-copyright" aria-hidden="true"></i> 2020. By Anton Yurovski
            </div>

        </div>
    )
}

export default Footer;
