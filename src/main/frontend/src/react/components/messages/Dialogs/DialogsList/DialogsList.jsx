import React from 'react';
import style from './DialogsList.module.css';
import Dialog from "./Dialog/Dialog";

const  DialogsList = (props) => {

    let dialogs = props.dialogs.map(dialog => <Dialog dialog={dialog}/>)
    return (
        <div>
            {dialogs}
        </div>
    )

}
export default DialogsList;