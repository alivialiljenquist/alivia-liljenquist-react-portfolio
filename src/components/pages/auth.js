import React, { Component } from 'react';
import Login from "../auth/login"
import loginImg from "../../../static/assets/images/auth/auth-img.jpg"


export default class Auth extends Component {
    render() {
        return(
            <div className="auth-page-wrapper">
                <div className="left-column" style={{backgroundImage: `url(${loginImg})`}}>
                
                </div>
                <div className="right-column">
                    <Login />
                </div>
            </div>
        )
    }
}