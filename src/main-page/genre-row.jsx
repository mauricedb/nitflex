import React, { Component, PropTypes } from 'react';
import GenreRowMovie from './genre-row-movie';
import './genre-row.css';

class GenreRow extends Component {
  render() {
    const { genre, movies, startPlaying } = this.props;

    return (
      <div className="row genre-row">
        <h2>{genre}</h2>

        {movies.slice(0, 6).map(movie => (
            <GenreRowMovie
              key={movie.id}
              movie={movie}
              expandMovie={this.expandMovie}
            />))}
      </div>
    );
  }
}

GenreRow.propTypes = {
  genre: PropTypes.string.isRequired,
  movies: PropTypes.array.isRequired,
  startPlaying: PropTypes.func.isRequired,
};

export default GenreRow;
