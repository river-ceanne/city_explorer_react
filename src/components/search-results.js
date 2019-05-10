import React from 'react';
import Result,{Weather, Events, Yelp, Movies} from './result.js';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    let apis = ['weather','events','movies','yelp'];
    let apiItems = apis.map((item, i) => <li key={i}>{item}</li>);

    return(
      <>
      <Weather value={this.props.weather}/>
      <Yelp value={this.props.yelp}/>
      <Events value={this.props.events}/>
      <Movies value={this.props.movies}/>
      </>
      
    );
   
  }
}

export default SearchResults;
