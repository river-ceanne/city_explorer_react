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
    let weatherData=this.props.value;
    console.log('weather data length: ',weatherData.length);
    let weatherArr = new Array(weatherData.length).fill('');

    // let weather = weatherArr.map((item, i) => {
    //   console.log('-----------------',weatherData[i]);
    //   return <li key={i}>{weatherData[i]}</li>;
    // });

   
    if (this.props.value !== null){
      for(let i = 0; i < weatherData.length; i++)
      weatherArr.push(<li key ={i}>The forecast for {this.props.value[i].time} is: {this.props.value[i].forecast}.</li>);
    }

    let placeholder = <><li>PLACEHOLDER</li><li>PLACEHOLDER</li></>;

    console.table('API RESULTS IN WEATHER : ', weatherData);

    console.table('WEATHER ARRAY: ', weatherArr);

    return(
      <React.Fragment>
        <ul>{weatherArr}</ul>
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

