import React from 'react';
import style from './CommentBar.module.css';
import Comment from "./Comment/Comment";

const CommentBar = (props) => {
    let comments=props.commentList.map( comment => <Comment comment={comment}/>)
    return (
        <div>
            {comments}
        </div>
    )
}

export default CommentBar;