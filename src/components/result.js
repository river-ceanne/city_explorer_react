import React from 'react';
import superagent from 'superagent';
import If from './if/if.js';

let __API_URL__ = 'https://afternoon-brook-55677.herokuapp.com';

class Weather extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let query = this.props.value;
    let data;
    console.log(query);
    const getAPIData = async () => {
      data = await superagent.get(`${__API_URL__}/weather`).query({ data : query });
    };
    getAPIData();

    let apiResults = data;

    console.log('API RESULTS IN WEATHER : ',apiResults);

    return(
      <React.Fragment>
        <ul>{this.props.children}</ul>
      </React.Fragment>
    );
   
  }
}

export default Weather;