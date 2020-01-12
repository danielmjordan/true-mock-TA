import React from 'react';
import Movies from './Movies.jsx';
import Search from './Search.jsx';
import exampleMovies from '../exampleData/exampleMovies';

import '../styles/App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: exampleMovies.movieData,
      favorites: [{ deway: 'favorites' }],
      showFaves: false,
    };

    // you might have to do something important here!
  }

  swapFavorites() {
    // don't touch
    this.setState({
      showFaves: !this.state.showFaves,
    });
  }

  render() {
    return (
      <div className="app">
        <header className="navbar"><h1>Bad Movies</h1></header>
        <div className="main">
          <Search
            swapFavorites={this.swapFavorites}
            showFaves={this.state.showFaves}
          />
          <Movies
            movies={this.state.showFaves ? this.state.favorites : this.state.movies}
            showFaves={this.state.showFaves}
          />
        </div>
      </div>
    );
  }
}

export default App;
