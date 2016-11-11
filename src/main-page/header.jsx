import React, { Component, PropTypes } from 'react';

class Header extends Component {
  render() {
    return (
      <div>
        {this.constructor.name}
      </div>
    );
  }
}

Header.propTypes = {
};

export default Header;