import { React, Component } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends Component {

  onSearchSubmit(term) {
    axios.get('https://api.unsplash.com/search/photos', {
      params: {
        query: term
      },
      headers: {
        Authorization: 'Client-ID Z_bQJn2PjhqdUe8uJm2c_C-n7LMdOruT8JWk2-Ip058'
      }
    });
  }

  render() {
    return (
      <div className="ui container" style={{marginTop: '20px'}}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    )
  }
};

export default App;