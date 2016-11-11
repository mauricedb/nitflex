import React, { Component, PropTypes } from 'react';

class LoginPage extends Component {
  render() {
    return (
      <form className="col-sm-6 col-sm-offset-3">
        <div className="form-group">
          <label htmlFor="username">Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            id="username"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="form-control"
            placeholder="Password"
          />
        </div>
        <div className="checkbox">
          <label htmlFor="rememberMe">
            <input
              type="checkbox"
              id="rememberMe"
            />
            Remember me on this device
          </label>
        </div>
        <button className="btn btn-primary">Sign In</button>
      </form>
    );
  }
}

LoginPage.propTypes = {
  loginAsUser: PropTypes.func.isRequired,
};

export default LoginPage;


