import React from 'react';

const PostButtons = (props) => {

    const voteOptions = props.voteOptions.map((option, index) => <button key={index} type="button" className="btn btn-outline-secondary mr-3">{option}</button>)

    return (
        <React.Fragment>
            {voteOptions}
        </React.Fragment>
    );
};

export default PostButtons;