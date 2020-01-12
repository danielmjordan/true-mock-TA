import React from 'react';
import config from '../../config';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genres: sampleGenres,
    };
  }

  componentDidMount() {
    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${config.API_KEY}&language=en-US`)
      .then((data) => {
        return data.json();
      })
      .then((jsonData) => {
        console.log(jsonData);
      })
      .catch(err => err);
  }



  render() {
    console.log(this.props)
    return (
      <div className="search">
        <button onClick={() => this.props.swapFavorites()}>{this.props.showFaves ? 'Show Results' : 'Show Favorites'}</button>
        <br /><br />

        {/* Make the select options dynamic from genres !!! */}
        {/* How can you tell which option has been selected from here? */}

        <select>
          {this.state.genres.map((genre, i) => {
            return <option value={genre} index={i}>{genre}</option>
          })}
        </select>
        <br /><br />

        <button>Search</button>

      </div>
    );
  }
}

const sampleGenres = [ 'something', 'another thing', 'different thing', 'thing'];

export default Search;
