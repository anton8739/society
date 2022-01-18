
import style from './LeftMenuItem.module.css';
import {NavLink} from "react-router-dom";

const LeftMenuItem = (props) => {
    return(
        <div className={style.item}>

            <NavLink className={style.link} to={props.to}>
                <i className={"fa fa-cog "+style.hidden} aria-hidden="true"></i>
                <i className={props.icon} aria-hidden="true"></i>
                {props.text}</NavLink>
        </div>
    );
}
export default LeftMenuItem;