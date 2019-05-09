import React from 'react';
import Weather from './result.js';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    let apis = ['weather','events','movies','yelp'];
    let apiItems = apis.map((item, i) => <li key={i}>{item}</li>);

    return(
      <>
      <Weather value={this.props.value}/>
      </>
      
    );
   
  }
}

export default SearchResults;
