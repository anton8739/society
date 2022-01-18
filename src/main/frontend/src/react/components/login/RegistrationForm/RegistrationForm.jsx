import React from 'react';

import style from './RegistrationForm.module.css';

const RegistrationForm = () => {
    return (
        <div className={style.main}>
            <div className={style.h1}>Впервые ВКонтакте?</div>
            <div className={style.h2}>Моментальная регистрация</div>
            <input className={style.name} type="text" placeholder="Ваше имя"/>
            <input className={style.surname} type="text" placeholder="Ваша фамилия "/>
            <div className={style.data}>
                <span>Дата рождения</span>
                <i className="fa fa-question-circle-o" aria-hidden="true"></i>
            </div>
            <div className={style.selectBlock}>
                <select className={style.select}>
                    <option>День
                    </option>
                    <option>Пункт 2</option>
                    <option>Пункт 2</option>
                    <option>Пункт 2</option>
                </select>
                <select className={style.select}>
                    <option>Месяц</option>
                    <option>Пункт 2</option>
                    <option>Пункт 2</option>
                    <option>Пункт 2</option>
                </select>
                <select className={style.select}>
                    <option>Год</option>
                    <option>Пункт 2</option>
                    <option>Пункт 2</option>
                    <option>Пункт 2</option>
                </select>
            </div>
            <div className={style.btn}>Продолжить регистрацию</div>
        </div>
    )
}
export default  RegistrationForm;