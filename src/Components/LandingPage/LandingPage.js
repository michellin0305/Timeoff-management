import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../LandingPage/LandingPage.css'

class LandingPage extends Component {
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
                        <li className="nav-item">
                            <Link to="/login">
                            <a className="nav-link" componentClass={Link} href="/">Login</a>
                            </Link>
                        </li>
                        </ul>
                    </div>
                    </nav>
                    <header className="masthead">
                        <div className="container-mast">
                            <div className="intro-text">
                                <div className="intro-lead-in text-uppercase m-auto">
                                <h1 className="head">timeoff management</h1>
                                </div>
                                <div className="intro-heading">
                                <p>An open source,simple yet powerful absence management software for every size of businesses </p>
                                </div>
                                <Link to="/signup">
                                <a className="btn btn-primary btn-xl" href="/">Sign Up</a>
                                </Link>
                                </div>
                        </div>
                    </header>  
                    <section id="services">
                        <div className="container-section">
                            <div className="row">
                                <div className="col-lg-12 text-center mb-10px">
                                    <h2 className="section-heading text-uppercase">
                                        Services
                                    </h2>
                                </div>
                            </div>
                            <div className="row text-center">
                                <div className="col-md-4">
                                <img className ="honeymoon  rounded-circle" src="./Images/honeyicon.png" alt="Honeymoon"/>
                                <h4 className="service-heading">Honeymoon</h4>
                                <p className="text-muted">
                                We give the best time off work to share with that special someone. sign up today and begin that step of love to a wonder world of romance. 
                                </p>
                                </div>
                                <div className="col-md-4">
                                <img className ="maternity  rounded-circle" src="./Images/mama.png" alt="Maternity"/>
                                <h4 className="service-heading"> Maternity </h4>
                                <p className="text-muted">
                                The joy of motherhood as no bound. Take time off work to share that special moment with the arrival of a new born. Sign up now.
                                </p>
                                </div>
                                <div className="col-md-4">
                                <img className ="sick  rounded-circle" src="./Images/sick.png" alt="Sick"/>
                                <h4 className="service-heading"> Sickleave </h4>
                                <p className="text-muted">
                                Health is wealth. Take time off work to get better again as we have got you covered, so what are you waiting, sign up now.
                                </p>
                                </div>
                            </div>
                        </div>
                    </section>       
                    <footer className= "footer bg-dark">
                        <div className="container-section">
                            <div className="row text-center">
                                <div className="col-md-6">
                                <span className="copyright">Copyrigth &copy; All Rights Reserved.</span>
                                </div>
                                <div className="col-md-6 ">
                                <ul className="list-inline quicklinks ">
                                    <li className="list-inline-item ">
                                    <a href="/">Privacy Policy</a>
                                    </li>
                                    <li className="list-inline-item ">
                                    <a href="/">Terms of Use</a>
                                    </li>
                                </ul>
                                </div>
                            </div>
                        </div>
                    </footer>          
            </div>
         );
    }
}
 
export default LandingPage;