import React from 'react';
import styles from './PostContent.module.scss';

const PostContent = (props) => {
    let content = [];
    props.content.startsWith("http") ? content.push(<div key="image"><img className={styles.image + ' mb-3'} alt="" src={props.content}></img></div>) : content.push(<div key="text" className={styles.content + ' mb-3 mx-auto'}><p>{props.content}</p></div>)
    return (
        <React.Fragment>
            {content}
        </React.Fragment>
    );
};

export default PostContent;