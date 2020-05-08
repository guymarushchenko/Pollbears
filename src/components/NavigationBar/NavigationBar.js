import React, { useState, useEffect } from 'react';
import logo from '../../images/bear.png'
import { Link } from "react-router-dom";
import SignUpModal from '../Modals/SignUpModal'


const NavigationBar = () => {
    const [showSignUp, setShowSignUp] = useState({ show: false });
    const [showLogin, setShowLogin] = useState({ show: false });

    const handleSignUpClick = () => setShowSignUp({ show: true });
    const handleLoginClick = () => setShowLogin({ show: true });
    const handleSignUpHide = () => setShowSignUp({ show: false });
    const handleLoginHide = () => setShowLogin({ show: false });

    return (
        <React.Fragment>
            <SignUpModal isShown={showSignUp.show} handleClose={handleSignUpHide} />
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
                <div className="container">
                    <Link className="navbar-brand" to="/"><img src={logo} width="40" height="40" alt="" /></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" onClick={handleLoginClick} to=""><i className="fas fa-sign-in-alt pr-2" />Log in <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" onClick={handleSignUpClick} to=""><i className="fas fa-user-plus pr-2" />Sign up <span className="sr-only">(current)</span></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    );
}

export default NavigationBar;