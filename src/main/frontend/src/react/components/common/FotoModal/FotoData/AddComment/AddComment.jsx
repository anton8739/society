import React from 'react';
import style from './AddComment.module.css';

const AddComment = (props) => {

    const [commentIsOpen, setCommentIsOpen] = React.useState(false);

    return (
        <div className={style.addComment}>
            <div className={style.inputBlock}>
                <img src={props.currentUserImg} className={style.img}/>
                <div>
                    <input onFocus={() => setCommentIsOpen(true)} type="text" placeholder="Написать комментарий ..."/>
                </div>

            </div>
            {
                !commentIsOpen ?
                    null
                    :
                    (
                        <div className={style.bar}>
                            <div className={style.clip}><i className="fa fa-exchange" aria-hidden="true"></i></div>
                            <div className={style.abort} onClick={() => setCommentIsOpen(false)}>Отмена</div>
                            <div className={style.send}>Отправить</div>
                        </div>
                    )
            }
        </div>
    )
}

export default AddComment;