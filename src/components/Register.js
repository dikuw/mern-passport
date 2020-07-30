import React from 'react';

class Register extends React.Component {

	handleChange = (event) => {
    this.props.updateUser(event.target.name, event.target.value );
  }

	handleSubmit = (event) => {
    event.preventDefault();
    this.props.register();
  }

	render() {
    return (
      <div className="SignupForm">
        <h4>Register</h4>
        <form className="form-horizontal">
          <div className="form-group">
            <div className="col-1 col-ml-auto">
              <label className="form-label" htmlFor="username">Username: </label>
            </div>
            <div className="col-3 col-mr-auto">
              <input className="form-input"
                type="text"
                name="username"
                placeholder="Enter your email address"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-1 col-ml-auto">
              <label className="form-label" htmlFor="password">Password: </label>
            </div>
            <div className="col-3 col-mr-auto">
              <input className="form-input"
                placeholder="Choose a password"
                type="password"
                name="password"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-group ">
            <div className="col-7"></div>
            <button
              className="btn btn-primary col-1 col-mr-auto"
              onClick={this.handleSubmit}
              type="submit"
            >Sign up</button>
          </div>
        </form>
      </div>
    );
	};
};

export default Register;
