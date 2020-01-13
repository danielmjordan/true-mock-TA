import React from 'react';
import Movies from './Movies.jsx';
import Search from './Search.jsx';
import exampleMovies from '../exampleData/exampleMovies';
import config from '../../config.js';
import '../styles/App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: exampleMovies.movieData,
      genreId: 28,
      favorites: [{ deway: 'favorites' }],
      showFaves: false,
    };

    this.handleSelect = this.handleSelect.bind(this);

  }


  //method to fetch all movies with particular genre
    //use search API endpoint but must filter by genre ID
  componentDidMount() {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${config.API_KEY}&query=Jack+Reacher`)
      .then((data) => {
        return data.json();
      })
      .then(results => {
        results.results.forEach(movie => {
          return movie.filter((mov) => mov.genre_id.includes(this.state.genre_id));
        })
      })
      .then(filteredMovies => this.setState({ movies: filteredMovies }))
      .catch(err => err);
  }


  //get value from dropdown select
  //need to find a way to access the id associated with the selection, not the text
  handleSelect(event) {
    console.log(event.target.value)
    this.setState({ selected: event.target.value })
  }


  swapFavorites() {
    // don't touch
    this.setState({
      showFaves: !this.state.showFaves,
    });
  }

  //render app
  render() {
    return (
      <div className="app">
        <header className="navbar"><h1>Bad Movies</h1></header>
        <div className="main">
          <Search
            swapFavorites={this.swapFavorites}
            showFaves={this.state.showFaves}
            handleSelect={this.handleSelect}
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
