import React from 'react';
import superagent from 'superagent';
import If from './if/if.js';
require('dotenv').config();

let __API_URL__ = 'https://afternoon-brook-55677.herokuapp.com';

const Header = () => {
  return (
    <header>
      <h1>City Explorer</h1>
      <p>Enter a location below to learn about the weather, events, restaurants, movies filmed there, and more!</p>
    </header>
  );
};

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search_query: '',
    };
  }

  handleSearchKeyword = (search_query) => {
    this.setState({ search_query });
  };

  handleSubmit = async e => {
    e.preventDefault();
    let data = await superagent.get(__API_URL__);
    let apiResults = data.body.results.reduce((list, resultVal) => {
      list[resultVal.name] = resultVal.url;
      return list;
    }, {});

    console.log(apiResults);
    this.props.handler(apiResults);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleSearchKeyword} />
        <button onClick={this.handleSubmit}>Search</button>
      </form>
    );
  }
}

class Map extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      map : ''
    };
  }

  render() {
    return (
      <div class="mapouter"><div class="gmap_canvas">
      <iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=seattel&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
      </iframe><a href="https://www.crocothemes.net"></a></div></div>
    );
  }
}

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Result />
    );
   
  }
}

class Result extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <section>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </section>
    );
   
  }
}

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <SearchForm />
        <Map />
        <SearchResults />
      </>
    );
  }
}

export default App;
