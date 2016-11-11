import React, { Component } from 'react';
import AppPresentation from './app-presentation';

class AppContainer extends Component {
  constructor(props) {
    super(props);

    this.state = { user: null };
this.x=2;
    this.loginAsUser = this.loginAsUser.bind(this);
  }

  loginAsUser(user) {
    this.setState({ user });
  }

  render() {
    const { user } = this.state;

    return (
      <AppPresentation
        user={user}
        loginAsUser={this.loginAsUser}
      />
    );
  }
}

export default AppContainer;

