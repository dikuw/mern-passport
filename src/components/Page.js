import React from 'react';

class Page extends React.Component {

  render() {
    return (
      <React.Fragment>
        {this.props.isLoggedIn ? (
          <p>Welcome to the protected page {this.props.username}</p>
        ) : (
          <p>Error: this page is for logged in users only!</p>
        )}
      </React.Fragment>
    );
  };
};

export default Page;
