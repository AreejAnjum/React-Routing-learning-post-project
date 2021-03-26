import React from 'react';
import {withRouter} from 'react-router-dom'
import './Post.css';

const post = (props) => (
    <article onClick={props.clicked}className="Post">
        <h1>{props.title}</h1>
        <div className="Info">
            <div className="Author">{props.author}</div>
        </div>
    </article>
);

// wraping with withRouter is used to get router props as post was return from posts and 
// was not getting router props like match, history.....
export default withRouter(post); 