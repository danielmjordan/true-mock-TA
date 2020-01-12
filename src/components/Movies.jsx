import React from 'react';
import MovieTile from './MovieTile';

class Movies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <ul className="movies">
        {this.props.movies.results.map((movie, key) => {
          return <ul><MovieTile movie={movie} key={movie.id}/></ul>
        })}
      </ul>
    )
  }
}

export default Movies;
