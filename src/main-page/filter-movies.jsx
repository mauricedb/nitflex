import React, { Component, PropTypes } from 'react';

class FilterMovies extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
    };

    this.onSearchChange = this.onSearchChange.bind(this);
  }

  onSearchChange(e) {
    const search = e.target.value;
    this.setState({ search });
  }

  render() {
    const { search } = this.state;

    return (
      <form className="navbar-form navbar-right">
        <div className="input-group">
          <input
            type="text"
            value={search}
            onChange={this.onSearchChange}
            className="form-control"
            placeholder="Search"
          />
          <span className="input-group-btn">
            <button className="btn btn-default">
              <i className="glyphicon glyphicon-search" />
            </button>
          </span>
        </div>
      </form>
    );
  }
}

export default FilterMovies;
