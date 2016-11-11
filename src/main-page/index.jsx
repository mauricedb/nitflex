import React, { Component, PropTypes } from 'react';

class MainPage extends Component {
  render() {
    return (
      <div>
        {this.constructor.name}
      </div>
    );
  }
}

MainPage.propTypes = {
};

export default MainPage;