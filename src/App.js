import React from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import Signup from './components/sign-up';
import LoginForm from './components/login-form';
import Navbar from './components/navbar';
import Home from './components/home';

class App extends React.Component {
  state = {
    loggedIn: false,
    username: null,
  };

  componentDidMount() {
    this.getUser();
  }

  updateUser = (userObject) => {
    this.setState(userObject);
  }

  getUser = () => {
    axios.get('/user/').then(response => {
      console.log('Get user response: ', response.data);
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ');
        this.setState({
          loggedIn: true,
          username: response.data.user.username
        });
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null
        });
      }
    });
  }

  render() {
    return (
      <div className="App">
        <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
        {/* greet user if logged in: */}
        {this.state.loggedIn && <p>Join the party, {this.state.username}!</p>}
        <Route exact path="/" component={Home} />
        <Route path="/login" render={() => <LoginForm updateUser={this.updateUser} />} />
        <Route path="/signup" render={() => <Signup/>} />
      </div>
    );
  };
};

export default App;
