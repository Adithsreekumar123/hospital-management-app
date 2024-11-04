import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation
import SubHeader from './SubHeader';
import './Login.css'; // Import the CSS file for styling

const Login = () => {
  return (
    <div>
      <SubHeader/>
   {/* Include your SubHeader if needed */}
      <div className="container mt-5">
        <div className="row">
          {/* Left side with the login form */}
          <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
            <div className="w-75"> {/* Set a width to keep fields manageable */}
              <h1 className="login-heading text-center">LOGIN</h1> {/* Added heading */}
              <p className="caption-text text-center">Stay connected and improve your treatment's efficiency together</p> {/* Added caption */}

              <div className="row g-3"> {/* Added a row for spacing */}
                <div className="col-12">
                  <label htmlFor="username" className="form-label">Username</label>
                  <input type="text" id="username" className="form-control" placeholder="Enter your username" />
                </div>

                <div className="col-12">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" id="password" className="form-control" placeholder="Enter your password" />
                </div>

                <div className="col-12 d-flex justify-content-center">
                  <button className="btn btn-primary">
                    Login <span>&#8594;</span> {/* Arrow symbol added */}
                  </button>
                </div>

                {/* New account link */}
                <div className="col-12 text-center mt-3">
                  <p>
                    Don't have an account? 
                    <Link to="/" className=""> Create an account</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side with the background image */}
          <div className="col-12 col-md-6 background-image">
            {/* Empty column for background image */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
