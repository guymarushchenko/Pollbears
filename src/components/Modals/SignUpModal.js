import React from 'react';
import Modal from 'react-bootstrap4-modal';
import FacebookLogin from 'react-facebook-login';
import useHttp from '../../hooks/http';

const SignUpModal = (props) => {
    const { sendRequest } = useHttp();

    const responseFacebook = async (response) => {
        const email = response.email;
        const name = response.name;
        const token = response.accessToken;
        await sendRequest('signup', 'POST', { email: email, name: name, token: token });
        props.handleClose();
    }

    return (
        <React.Fragment>
            <Modal visible={props.isShown} onClickBackdrop={props.handleClose}>
                <div className="container">
                    <h2>Hello!</h2>
                    <p>Welcome to pollbears!</p>
                    <p> Get it? because it sounds like pollarbears ;)</p>
                    <FacebookLogin
                        appId="1536825756477462"
                        fields="name,email,picture"
                        callback={responseFacebook}
                    />
                </div>
            </Modal>
        </React.Fragment>
    );
}

export default SignUpModal;
