import React from 'react';
import superagent from 'superagent';
import If from './if/if.js';
import Header from './header.js';
import SearchResults from './search-results.js';
import SearchForm from './search-form.js';
import { Route } from 'react-router-dom';
require('dotenv').config();

let __API_URL__ = 'https://afternoon-brook-55677.herokuapp.com';

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
        <Map value={this.state}/>
        <SearchResults />
      </>
    );
  }
}//end of <App>

export default App;



class Map extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      parentState : this.props.value,
      latitude : -33.8569,
      longitude: 151.2152,
      mapURL: `https://maps.googleapis.com/maps/api/staticmap?center=${this.latitude}%2c%20${this.longitude}&zoom=13&size=600x300&maptype=roadmap
      &key=${process.env.REACT_APP_GEOCODE_API_KEY}`
    };

    console.log('MAP STATE : ',this.state);
  }

  displayMap = () => {
    let location = this.props.value;
    let mapURL = `https://maps.googleapis.com/maps/api/staticmap?center=${location.latitude},{location.longitude}&zoom=13&size=600x300&maptype=roadmap
    &key=${process.env.REACT_APP_GEOCODE_API_KEY}`
    this.setState({mapURL});
    console.log('MAP STATE AFTER SISPLAY MAP : ', this.state);
  }
  

  render() {
    return (
      <img width="600" height="500" id="gmap_canvas" 
      src={this.state.mapURL} onChange={this.displayMap}/>
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

