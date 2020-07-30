import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <p>Welcome home {this.props.isLoggedIn ? this.props.username : 'guest. Try registering an account or logging in!'}</p>
    );
  };
};

export default Home;
