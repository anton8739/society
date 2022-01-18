import React from 'react';
import style from './NewsBarItem.module.css';
import Comment from "./Comment/Comment";

const NewsBarItem = (props) => {

    let comments = props.story.lastcomments.map(comment => <Comment comment={comment}/>)
    return (
        <div className={style.item}>
            <div>
                <img className={style.img} src={props.story.img}/>
                <div className={style.publisher}>
                    {props.story.publisher}
                </div>
                <div className={style.time}>
                    {props.story.timeOfCreation}
                </div>
            </div>
            <div>
                <div className={style.text}>
                    {props.story.text}
                </div>
                <div className={style.fotoWraper}>
                    <img className={style.foto} src={props.story.foto}/>
                </div>

            </div>
            <div className={style.bottomMenu} l>
                <div className={style.bottomMenuBtn}>
                    <span className={style.bottomMenuBtnIcon}>
                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                    </span>

                    <span className={style.bottomMenuBtnText}>
                        {props.story.likes}
                    </span>
                </div>
                <div className={style.bottomMenuBtn}>
                    <span className={style.bottomMenuBtnIcon}>
                      <i className="fa fa-comment-o" aria-hidden="true"></i>
                    </span>

                    <span className={style.bottomMenuBtnText}>
                          {props.story.comments}
                    </span>
                </div>
                <div className={style.bottomMenuBtn}>
                    <span className={style.bottomMenuBtnIcon}>
                        <i className="fa fa-share" aria-hidden="true"></i>
                    </span>

                    <span className={style.bottomMenuBtnText}>
                         {props.story.share}
                    </span>
                </div>
                <div className={style.bottomMenuViews}>
                    <span className={style.bottomMenuBtnIcon}>
                        <i className="fa fa-eye" aria-hidden="true"></i>
                    </span>

                    <span className={style.bottomMenuBtnText}>
                         {props.story.views}
                    </span>
                </div>

            </div>
            <div className={style.commentBlock}>
                <div className={style.commentSort}>
                    <span>Сначала интересные  </span>

                    <i className="fa fa-arrow-down" aria-hidden="true"></i>

                </div>
                {comments}
            </div>
            <div className={style.next}>Показать последующие коментарии</div>
        </div>
    )
}

export default NewsBarItem;
