import React from 'react';
import superagent from 'superagent';
import If from './if/if.js';
import Header from './header.js';
import { Route } from 'react-router-dom';
require('dotenv').config();

let __API_URL__ = 'https://afternoon-brook-55677.herokuapp.com';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {}
    };
  }

  setLoc = () => {
    this.setState({ selected: this.state.selected.map((v, i) => i === index ? value : v)})
}
  

  render() {
    return (
      <>
        <Header />
        <SearchForm onChange=this.setLoc />
        <Map value={this.state.location}/>
        <SearchResults />
      </>
    );
  }
}//end of <App>

export default App;

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search_query: '',
    };
  }

  handleSearchKeyword = e => {
    let search_query = e.target.value;
    this.setState({ search_query });
  };

  handleSubmit = async e => {
    e.preventDefault();
    let query = this.state.search_query;
    console.log(query);
    let data = await superagent.get(`${__API_URL__}/location`).query({ data : query });
    console.log(data.body);
    let apiResults = data.body;

    console.log('API RESULTS : ',apiResults);
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
      latitude : '',
      longitude: ''
    };
  }

  render() {
    return (
      <iframe width="600" height="500" id="gmap_canvas" 
      src="https://www.google.com/maps/embed/v1/view
      ?key={  }
      &center=-33.8569,151.2152
      &zoom=18
      &maptype=satellite"
      frameBorder="0" scrolling="no">
      </iframe>
    );
  }
}

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    let apis = ['weather','events','movies','yelp'];
    let apiItems = apis.map((item, i) => <li key={i}>{item}</li>);

    return(
      <></>
      // <>
      // <Route exact path="/" component={App} />
      // <Route exact path="/apis" render={() => <Result>{apiItems}</Result>} />
      // </>
    );
   
  }
}

class Result extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <React.Fragment>
        <ul>{this.props.children}</ul>
        <If condition={this.props.children.length > 1}>
        </If>
      </React.Fragment>
    );
   
  }
}

