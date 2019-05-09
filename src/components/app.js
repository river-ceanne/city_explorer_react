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
      }
    };
  }

  setLoc = location => {
    this.setState(location)
    console.log(this.state);
}

  render() {
    return (
      <>
        <Header />
        <SearchForm callback={this.setLoc} />
        <Map value={this.state} />
        <SearchResults />
      </>
    );
  }
}//end of <App>

export default App;
