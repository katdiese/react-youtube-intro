import React, { Component } from 'react';

class SearchBar extends Component {
  //super() just calls the parent constructor, always has to be at the top
  //akin to if you made a constructor function for ES5, every class has a constructor method that gives every instance of searchbar these methods
  constructor() {
    super();
    this.state = { term: '' }
  }

  onInputChange(term) {
    //if you have a key value pair that is the same, you can just name the key and it'll infer key value pair
    this.setState({ term });
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value = {this.state.term}
          onChange = {event => this.onInputChange(event.target.value)}
        />
      </div>
    )
  }
}

export default SearchBar;

module.exports = SearchBar;