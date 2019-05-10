import React from 'react';
import superagent from 'superagent';
import If from './if/if.js';

let __API_URL__ = 'https://afternoon-brook-55677.herokuapp.com';

export class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ''
    }
  }

  render() {
    let query = this.props.value.search_query;
    let data;
    console.log(query);

    const getAPIData = async () => {
      data = await superagent.get(`${__API_URL__}/weather`).query({ data : query });
      console.log(data.text);
      this.setState({data: data.text});
    };

    //getAPIData();

    let apiData  = [...this.state.data];
    console.log('API DATA: ',apiData);
    let weather = apiData.map((item, i) => <li key={i}>{item.forecast}</li>);
    let placeholder = <><li>PLACEHOLDER</li><li>PLACEHOLDER</li></>;

    console.log('API RESULTS IN WEATHER : ', apiData);

    return(
      <React.Fragment>
        <ul>{placeholder}</ul>
      </React.Fragment>
    );
   
  }
}




// **************************************************************//
export const Yelp = props => {
  return <footer>My Cool Footer</footer>;
};



// **************************************************************//

export const Movies = props => {
  return <footer>My Cool Footer</footer>;
};



// **************************************************************//

export const Events = props => {
  return <footer>My Cool Footer</footer>;
};


// **************************************************************//

