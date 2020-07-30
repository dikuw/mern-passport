import React from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Home from './components/Home';

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
      console.log('App get user response: ', response.data);
      if (response.data.user) {
        this.setState({
          loggedIn: true,
          username: response.data.user.username
        });
      } else {
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
        <Route path="/login" render={() => <Login updateUser={this.updateUser} />} />
        <Route path="/signup" render={() => <Register updateUser={this.updateUser} />} />
      </div>
    );
  };
};

export default App;
