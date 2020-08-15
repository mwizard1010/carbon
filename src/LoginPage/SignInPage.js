import React, { Component } from "react";
import {Redirect, useHistory} from 'react-router-dom'
// import './../../node_modules/bootstrap/dist/css/bootstrap.min.css'

import './LoginPage.css';
export default class Login extends Component {
    render() {
        return (
            <div className="login">
                <div className="auth-wrapper auth-inner" > 
                    <form>
                        <h3>Sign In</h3>

                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" className="form-control" placeholder="Enter email" />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Enter password" />
                        </div>

                        <div className="form-group">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                            </div>
                        </div>
                        <button className="btn btn-primary btn-block" type="submit"> Submit</button>
                        <p className="forgot-password text-right">
                            Forgot <a href="#">password?</a>
                        </p>

                    </form>
                    <p> Not register yet? Register here!</p>
                    <button className="btn btn-primary btn-block" onClick={()=>this.props.history.push('/sign-up')}>Register Now</button>
                </div>
            </div>
        );
    }
}