import React from 'react';
import {Field, formValueSelector, Props as validate, reduxForm} from "redux-form";

import style from './LoginForm.module.css';
import {connect} from "react-redux";
import {logInUser, setActiveUser, setErrorMessage} from "../../../../redux/reducers/authReducer";
import Cookies from 'universal-cookie';
import {compose} from "redux";
import {IfLogInedHoc} from "./IfLogInedHoc";
import {Input} from "../../common/formControl/FormControl";
import {maxLength, required} from "../../../../utils/validator/validator";
import {AuthAPI} from "../../../../api/authApi";
import Preloader from "../../common/Preloader/Preloader";
const cookies = new Cookies();


const selector = formValueSelector('login')

let mapStateToProps = (state) => {
    return {
        login: state.auth.login,
        log :selector(state, 'login'),
        password : selector(state, 'password'),
        fetching :state.auth.fetching,
        errorMessage : state.auth.errorMessage

    }
}
const LoginForm = (props) => {
    let form = React.useRef();
    let login = React.useRef();
    let password = React.useRef();
    let [hasErorr, setHasError] =React.useState(false);

    let handleSubmit = (event) => {
        event.preventDefault();
        if (login.current.props._reduxForm.valid && password.current.props._reduxForm.valid) {
            setHasError(false);
            props.logInUser(props.log,props.password);
            props.setErrorMessage(null);
        } else {
            console.log("error");
            setHasError(true);
            props.setErrorMessage("Одно из полей заполнено не верно");
        }

        
    }
    return (
        <form ref={form} onSubmit={handleSubmit} className={style.main}>

            <Field ref={login} name="login" component={Input} type="text" placeholder="Email или телефон"
                   validate={[required,maxLength(20)]}
                   errorClass={style.error}
                   textClass={style.text}
                   formControlClass={style.formControl}
            ></Field>
            <Field ref={password} name="password" component={Input} type="password" placeholder="Пароль"
                   validate={[required]}
                   errorClass={style.error}
                   textClass={style.text}
                   formControlClass={style.formControl}
            ></Field>
            <div className={style.btnBar}>
                {props.fetching ? (
                    <div className={style.preloader}><Preloader/></div>
                ) : (
                    <input type="submit" className={style.btn} value="Войти"></input>
                    )}
                <div className={style.forgot}>Забыли пароль?</div>
            </div>
            <div className={style.errMassage}>{props.errorMessage}</div>
        </form>
    )
}
export default compose(
    IfLogInedHoc,
    reduxForm({
        form: 'login'
    }),
    connect(mapStateToProps, {setActiveUser, logInUser, setErrorMessage})

)(LoginForm);