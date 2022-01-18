import style from './logo.module.css';
import logo from '../../../../../img/logo.png'
const Logo = () => {
    return (
        <div className={style.logo}>
           <img className={style.logoImg} src={logo}/>
            <span className={style.text}>Society</span>
        </div>
    );
}

export default Logo;