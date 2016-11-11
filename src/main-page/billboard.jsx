import React, { Component, PropTypes } from 'react';

class Billboard extends Component {
  render() {
    return (
      <div>
        {this.constructor.name}
      </div>
    );
  }
}

Billboard.propTypes = {
};

export default Billboard;