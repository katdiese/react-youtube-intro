import React from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/SearchBar';
import { apiKey } from '../config.js'

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('cats');
  }

  videoSearch(term) {
    YTSearch({ key: apiKey, term: term }, (videos) => {
      console.log(videos);
    });
  }

  //render component can only return one element, so everything has to be in a parent div
  render() {
    return (
      <div>
        <SearchBar />
      </div>
      )
  }
}
//attach to DOM, instantiate component (self closing HTML tag)
//1. what you want to render
//2. Where you want to anchor it
ReactDom.render(<App />, document.querySelector('.container'));