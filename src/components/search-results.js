import React from 'react';

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

export default SearchResults;
