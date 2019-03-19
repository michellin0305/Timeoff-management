import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../LoginPage/LoginPage.css'

class LoginPage extends Component {

    render() { 
        return ( 
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top navbar-shrink">
                <a className="navbar-brand" href="/">TimeOff</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                            <Link to="/signup">
                            <a className="nav-link" href="/" componentClass={Link}>Sign Up</a>
                            </Link>
                        </li>
                    </ul>
                </div>
                </nav>
                <div className="container">
                <div classname="wrapper">
                <div className="form-wrapper">
                <h1>Login</h1>
                <form onSubmit ={this.handlesubmit} noValidate>
                <div className="email">
                    <label htmlFor="email">User Email</label>
                      <input type="email" name="email"
                         placeholder="johndoe@example.com" noValidate/>
                    </div>
                    <div className="password">
                    <label htmlFor="password">password</label>
                      <input type="password" name="password"
                         placeholder=".password" noValidate/>
                    </div>
                    <div className="login">
                        <button type="submit">LOGIN</button>
                        <small><a href="/">Forgot Password?</a></small>
                    </div>
                </form>
                </div>
            </div>
                </div>   
            </div>
         )
    }
}

 
export default LoginPage;