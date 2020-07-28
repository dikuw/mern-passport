import React from 'react';

class Home extends React.Component {
  render() {
    const imageStyle = {
      width: 400
    };
    return (
      <React.Fragment>
        <p>It's good to be home</p>
        <img style={imageStyle} src="https://i.ytimg.com/vi/N1icEHtgb3g/maxresdefault.jpg" alt="a lovely home" />
      </React.Fragment>
    );
  };
};

export default Home;
