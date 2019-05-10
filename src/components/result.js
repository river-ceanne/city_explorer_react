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
    let data=this.props.value;
    console.log('weather data length: ',data.length);
    let weatherArr = new Array(data.length).fill('');

   
    if (this.props.value !== null){
      for(let i = 0; i < data.length; i++)
      weatherArr.push(<li key ={i}>The forecast for {this.props.value[i].time} is: {this.props.value[i].forecast}.</li>);
    }

    let placeholder = <><li>PLACEHOLDER</li><li>PLACEHOLDER</li></>;

    console.table('API RESULTS IN WEATHER : ', data);

    console.table('WEATHER ARRAY: ', weatherArr);

    return(
      <React.Fragment>
        <ul>{weatherArr}</ul>
      </React.Fragment>
    );
   
  }
}//end of WEATHER

// **************************************************************//
export const Yelp = props => {
  let data=props.value;
    console.log('weather data length: ',data.length);
    let yelpArr = new Array(data.length).fill('');

   
    if (props.value !== null){
      for(let i = 0; i < data.length; i++)
      yelpArr.push(
        <li key = {i}>
            <a href={data[i].url}>{data[i].name}</a>
            <p>The average rating is {data[i].rating} out of 5 and the average cost is {data[i].price} out of 4</p>
            <img src={data[i].image_url} alt = "Yelp"/>
          </li>
      );
    }

    let placeholder = <><li>PLACEHOLDER</li><li>PLACEHOLDER</li></>;

    console.table('API RESULTS IN WEATHER : ', data);

    console.table('WEATHER ARRAY: ', yelpArr);

    return(
      <React.Fragment>
        <ul>{yelpArr}</ul>
      </React.Fragment>
    );
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

