import React from 'react';
import './Comment.css';

export function Comment(props) {
    return (
        <div className="Comment">
            <span>
                <i className="far fa-comment-dots"></i>
                {props.author}
            </span>
            <span className="date"> ({props.date.toLocaleDateString()})</span>
            <p>{props.content}</p>
        </div>
    )
}