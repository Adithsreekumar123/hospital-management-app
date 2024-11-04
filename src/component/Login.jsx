import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import SubHeader from './SubHeader';
import './Login.css'; // Import the CSS file for styling

const Login = () => {
  const navigate = useNavigate(); // Initialize navigate

  const handleLoginClick = () => {
    // Add any authentication logic here if needed
    navigate('/view'); // Navigate to the view page
  };

  return (
    <div>
      <SubHeader/>
      <div className="container mt-5">
        <div className="row">
          {/* Left side with the login form */}
          <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
            <div className="w-75">
              <h1 className="login-heading text-center">LOGIN</h1>
              <p className="caption-text text-center">Stay connected and improve your treatment's efficiency together</p>

              <div className="row g-3">
                <div className="col-12">
                  <label htmlFor="username" className="form-label">Username</label>
                  <input type="text" id="username" className="form-control" placeholder="Enter your username" />
                </div>

                <div className="col-12">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" id="password" className="form-control" placeholder="Enter your password" />
                </div>

                <div className="col-12 d-flex justify-content-center">
                  <button className="btn btn-primary" onClick={handleLoginClick}>
                    Login <span>&#8594;</span> {/* Arrow symbol added */}
                  </button>
                </div>

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
