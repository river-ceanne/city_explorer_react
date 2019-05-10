import React from 'react';
import Header from './header.js';
import SearchResults from './search-results.js';
import SearchForm from './search-form.js';
import Map from './map.js';
require('dotenv').config();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {
        latitude: -33.8569,
        longitude: 151.2152
      },
      weather: {},
      yelp: {},
      events: {},
      movies: {}
    };
  }

  setStateData = stateData => {
    this.setState(stateData)
    console.log(this.state);
}

  render() {
    return (
      <>
        <Header />
        <SearchForm callback={this.setStateData} />
        <Map value={this.state} />
        <SearchResults value={this.state} weather={this.state.weather}/>
      </>
    );
  }
}//end of <App>

export default App;
