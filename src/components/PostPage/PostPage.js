import React, { useState, useEffect } from 'react';
import Post from '../Post/Post'
import useHttp from '../../hooks/http';

const PostPage = (props) => {
    const [postState, setPostState] = useState({});
    const { isLoading, data, sendRequest } = useHttp();

    useEffect(() => {
        sendRequest(`post/${props.postId}`, 'GET');
    }, [props.postId, sendRequest]);

    useEffect(() => {
        setPostState(data);
    }, [data])

    return (
        <div className="container text-center">
            {(!isLoading && postState) && <Post id={postState._id} title={postState.title} content={postState.content} voteOptions={postState.voteOptions} />}
            <h3>Comments:</h3>
        </div>
    );
};

export default PostPage;