import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class Navbar extends React.Component {

  render() {
    return (
      <header className="navbar App-header" id="nav-container">
        <div className="col-4" >
          {this.props.isLoggedIn ? (
            <section className="navbar-section">
              <Link to="/" className="btn btn-link text-secondary">
                <span className="text-secondary">home</span>
              </Link>
              <Link to="/page" className="btn btn-link text-secondary">
                <span className="text-secondary">protected page</span>
              </Link>
              <Link to="#" className="btn btn-link text-secondary" onClick={this.props.logout}>
                <span className="text-secondary">logout</span>
              </Link>
            </section>
          ) : (
            <section className="navbar-section">
              <Link to="/" className="btn btn-link text-secondary">
                <span className="text-secondary">home</span>
              </Link>
              <Link to="/login" className="btn btn-link text-secondary">
                <span className="text-secondary">login</span>
              </Link>
              <Link to="/register" className="btn btn-link">
                <span className="text-secondary">register</span>
              </Link>
            </section>
          )}
        </div>
        <div className="col-4 col-mr-auto">
          <h1 className="App-title">MERN Passport Example</h1>
        </div>
      </header>
    );
  };
};

export default Navbar;