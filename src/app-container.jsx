import React, { Component } from 'react';
import AppPresentation from './app-presentation';

class AppContainer extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      user: null,
      movies: null,
    };
    this.loginAsUser = this.loginAsUser.bind(this);
    this.startPlaying = this.startPlaying.bind(this);
  }

  componentWillMount() {
    if (localStorage.user) {
      try {
        const user = JSON.parse(localStorage.user);
        this.setState({ user });
        this.fetchMovies();
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
      }
    }
  }

  fetchMovies() {
    fetch('/movies.json')
      .then(rsp => rsp.json())
      .then(movies => this.setState({ movies }));
  }

  startPlaying(movie) {
    this.setState({ playing: movie });
  }

  loginAsUser(user) {
    if (user.rememberMe) {
      localStorage.user = JSON.stringify(user);
    }
    this.setState({ user });
    this.fetchMovies();
  }

  render() {
    const { user, movies, playing } = this.state;

    return (
      <AppPresentation
        user={user}
        loginAsUser={this.loginAsUser}
        movies={movies}
        startPlaying={this.startPlaying}
        playing={playing}
      />
    );
  }
}

export default AppContainer;

