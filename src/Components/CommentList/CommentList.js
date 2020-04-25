import React from 'react';
import './CommentList.css';
import { Comment } from '../Comment/Comment';


export function CommentList() {
    return (
        <section className="CommentList rounded">
            <div className="rounded">
                <h3>Comments</h3>
            </div>
            < Comment
                author="Gabriel Rice"
                date={new Date()}
                content="I'm baby bicycle rights chillwave venmo ethical dreamcatcher, enamel pin heirloom narwhal kogi synth church-key XOXO."
            />
            < Comment
                author="Victoria Alexander"
                date={new Date()}
                content="Mixtape blue bottle"
            />
            < Comment
                author="Christina Louis"
                date={new Date()}
                content="Polaroid pok pok marfa vice selfies umami distillery, kitsch everyday carry pug +1."
            />
        </section>
    )
}


