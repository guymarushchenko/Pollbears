import React from 'react';
import PostButtons from '../PostButtons/PostButtons';
import PostContent from './PostContent/PostContent'
import { Link } from 'react-router-dom';
import styles from './Post.module.scss';


const Post = (props) => {
    const id = props.id;
    return (
        <React.Fragment>
            <Link to={`/post/${id}`}><h3 className={styles.title + " mx-auto"}>{props.title}</h3></Link>
            <Link to={`/post/${id}`}><PostContent content={props.content} /></Link>
            <PostButtons voteOptions={props.voteOptions} />
            <hr />
        </React.Fragment>
    );
};

export default Post;