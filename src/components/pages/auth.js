import React, { Component } from 'react';
import Login from "../auth/login"
import loginImg from "../../../static/assets/images/auth/auth-img.jpg"


export default class Auth extends Component {
    constructor(props) {
        super(props);
        
        this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this)
        this.handleUnsccessfulAuth = this.handleUnsccessfulAuth.bind(this)
    }

    handleSuccessfulAuth() {
        this.props.handleSuccessfullLogin();
        this.props.history.push('/');
    }

    handleUnsccessfulAuth() {
        this.props.handleUnsuccessfullLogin();
    }


    render() {
        return(
            <div className="auth-page-wrapper">
                <div className="left-column" style={{backgroundImage: `url(${loginImg})`}}>
                
                </div>
                <div className="right-column">
                    <Login handleSuccessfulAuth={this.handleSuccessfulAuth}
                    handleUnsccessfulAuth={this.handleUnsccessfulAuth}/>
                </div>
            </div>
        )
    }
}