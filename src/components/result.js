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
    let weatherArr = new Array(data.length).fill('');

   
    if (this.props.value !== null){
      for(let i = 0; i < data.length; i++)
      weatherArr.push(<li key ={i}>The forecast for {this.props.value[i].time} is: {this.props.value[i].forecast}.</li>);
    }

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

    return(
      <React.Fragment>
        <ul>{yelpArr}</ul>
      </React.Fragment>
    );
};



// **************************************************************//

export const Movies = props => {
  let data=props.value;
    let movieArr = new Array(data.length).fill('');
    let movieImage = 'https://via.placeholder.com/150';
   
    if (props.value !== null){
      
      for(let i = 0; i < data.length; i++){
      
      // if(data[i].image_url !== null || data[i].image_url !== ''){
      //   movieImage = data[i].image_url;
      // }

      movieArr.push(
        <li key = {i}>
        <p>{data[i].title} was released on {data[i].released_on}. Out of {data[i].total_votes}, {data[i].title} has an average vote of {data[i].average_votes} and a popularity score of {data[i].popularity}</p>
        <p>{data[i].summary}</p>
        <img src={data[i].image_url} alt = "Movie"/>
        <p>{data[i].overview}</p>
      </li>
      );
      }
    }

    return(
      <React.Fragment>
        <ul>{movieArr}</ul>
      </React.Fragment>
    );

};

// **************************************************************//

export const Events = props => {
  return <footer>My Cool Footer</footer>;
};


// **************************************************************//

