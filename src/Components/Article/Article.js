import React from 'react';
import './Article.css'
import { CommentList } from '../CommentList/CommentList'
import { LikeButton } from '../LikeButton/LikeButton';

export function Article(props) {
    return (
        <article className="Article rounded">
            <section>
                <div className="imgContainer">
                    < img src={props.img} alt='' className="rounded" />
                </div>
                <div className="titleContainer">
                    <h2>{props.title.toUpperCase()}</h2>
                    <LikeButton />
                </div>
                <p>
                    {props.content}
                </p>
            </section>
            < CommentList />
        </article>
    )
}