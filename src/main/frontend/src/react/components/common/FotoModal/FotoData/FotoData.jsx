import React from 'react';
import style from './FotoData.module.css';
import TopMenu from "./TopMenu/TopMenu";
import CommentBar from "./CommentBar/CommentBar";
import AddComment from "./AddComment/AddComment";

const FotoData = (props) => {
    return (
        <div className={style.fotoData}>
            <TopMenu user={props.data.user} data={props.data.data} likes={props.data.likes} share={props.data.share}/>
            <CommentBar commentList={props.data.commentList}/>
            <div className={style.addComment}>
                <AddComment currentUserImg={props.data.currentUserImg}/>
            </div>

        </div>
    )
}

export default FotoData;
