import React from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class LoginForm extends React.Component {
  state = {
    username: '',
    password: '',
    redirectTo: null
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    console.log('LoginForm handleSubmit');
    const { username, password } = this.state;
    let response = await axios.post('/user/login/', { username, password });
    console.log('login response: ', response);
    if (response.status === 200) {
      this.props.updateUser({
        loggedIn: true,
        username: response.data.username
      });
      this.setState({
        redirectTo: '/'
      });
    } else {
      console.log('login error');
    }
  }

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />
    } else {
        return (
          <React.Fragment>
            <h4>Login</h4>
            <form className="form-horizontal">
              <div className="form-group">
              <div className="col-1 col-ml-auto">
                <label className="form-label" htmlFor="username">Username: </label>
              </div>
              <div className="col-3 col-mr-auto">
                  <input className="form-input"
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Username"
                    value={this.state.username}
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
                    placeholder="password"
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="form-group ">
                <div className="col-7"></div>
                <button className="btn btn-primary col-1 col-mr-auto" onClick={this.handleSubmit} type="submit">Login</button>
              </div>
            </form>
        </React.Fragment>
      )
    }
  };
};

export default LoginForm;
