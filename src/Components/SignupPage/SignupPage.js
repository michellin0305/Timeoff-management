import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../SignupPage/SignupPage.css'


class SignupPage extends Component {
    
    render() { 
        return (  
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-shrink">
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
                            <Link to="/login">
                            <a className="nav-link" componentClass={Link} href="/">Login</a>
                            </Link>
                        </li>
                    </ul>
                </div>
                </nav>
                <form>
                    <div className="container">
                            <h1>Sign Up</h1>
                            <p>Please fill in this form to create an account</p>
                            <hr/>
                            <label htmlFor="companyName"><b>Company name</b></label>
                            <input type="text" placeholder="Enter company name" name="companyName" required/>

                            <label htmlFor="firstName"><b>First Name</b></label>
                            <input type="text" placeholder="First name" name="firstName" required/>
                            

                            <label htmlFor="lastName"><b>Last name</b></label>
                            <input type="text" placeholder="Last name" name="lastName" required/>
                            
                            <label htmlFor="email"><b>Email Address</b></label>
                            <input type="email" placeholder="Email"  name="email" required/>
                            
                            <label htmlFor="password"><b>Password</b></label>
                            <input type="password" placeholder="Password" name="password" required/>

                            <label htmlFor="confirmPassword"><b>Confirm Password</b></label>
                            <input type="password" placeholder="Password" name="confirmPassword" required/>

                            <p>By creating an account you agree to our <a href="/">Terms & Privacy</a>.</p>
                            <div className="clearfix">
                                <button type="submit" className="signupbtn">Sign Up</button>
                            </div>
                    </div>
                </form>
            </div>
        );
    }
}
 
export default SignupPage;