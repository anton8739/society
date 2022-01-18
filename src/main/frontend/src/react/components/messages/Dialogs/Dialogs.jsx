import React from 'react';
import style from  './Dialogs.module.css';
import Search from "./Search/Search";
import DialogsListContainer from "./DialogsList/DialogsListContainer";

const Dialogs = () => {
    return (
        <div className={style.dialogs}>
            <Search/>
            <DialogsListContainer/>
        </div>
    )
}

export default Dialogs;