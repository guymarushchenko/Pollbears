import React, { useState, useEffect } from 'react';
import Post from '../Post/Post'
import useHttp from '../../hooks/http';


const HomePage = () => {
    const [postsState, setPostsState] = useState([]);
    const { data, sendRequest } = useHttp();

    useEffect(() => {
        sendRequest('getAllPosts', 'GET');
    }, [sendRequest]);

    useEffect(() => {
        setPostsState(data);
    }, [data])

    const posts = postsState && postsState.map((post) => { return (<Post key={post._id} id={post._id} title={post.title} content={post.content} voteOptions={post.voteOptions}></Post>) })

    return (
        <React.Fragment>
            <div className="container text-center">
                {(data) ? posts : null}
            </div>
        </React.Fragment>
    );
};

export default HomePage;