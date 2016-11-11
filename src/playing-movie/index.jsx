import React, { Component, PropTypes } from 'react';

class PlayingMovie extends Component {
  render() {
    return (
      <div>
        {this.constructor.name}
      </div>
    );
  }
}

PlayingMovie.propTypes = {
};

export default PlayingMovie;