import React, { Component } from 'react';


class Search extends Component {
  render() {
    return (
      <div className="large-6-up grid-x align-middle align-center searchPad">
      <input className="cell large-6 medium-10 small-12" type="search" placeholder="Search Book" />
      </div>
    )
  }
}

export default Search
