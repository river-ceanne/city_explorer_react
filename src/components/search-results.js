import React from 'react';
import Result,{Weather} from './result.js';

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
      </>
      
    );
   
  }
}

export default SearchResults;
