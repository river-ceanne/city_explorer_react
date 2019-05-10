import React from 'react';

let __API_URL__ = 'https://afternoon-brook-55677.herokuapp.com';

// *****************************WEATHER*********************************//

export const Weather = props =>  {
    let data=props.value;
    let weatherArr = [];
   
    if (data !== null){
      for(let i = 0; i < data.length; i++)
      weatherArr.push(<li key ={i}>The forecast for {data[i].time} is: {data[i].forecast}.</li>);
    }

    return(
      <React.Fragment>
        <section className="weather">
        <ul>{weatherArr}</ul>
        </section>
      </React.Fragment>
    );
   
};//end of WEATHER

// *****************************YELP*********************************//

export const Yelp = props => {
  let data=props.value;
    let yelpArr = [];
   
    if (data !== null){
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
        <section className="yelp">
        <ul>{yelpArr}</ul>
        </section>
      </React.Fragment>
    );
};



// ******************************MOVIES********************************//

export const Movies = props => {
  let data=props.value;
    let movieArr = [];
   
    if (data !== null){
      
      for(let i = 0; i < data.length; i++){

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
        <section className="movies">
        <ul>{movieArr}</ul>
        </section>
      </React.Fragment>
    );

};

// ******************************EVENTS********************************//

export const Events = props => {
  let data=props.value;
    let eventsArr = [];

    if (data !== null){
      for(let i = 0; i < data.length; i++)
      eventsArr.push(
        <li key = {i}>
            <a href={data[i].link}>{data[i].name}</a>
            <p>Event Date: {data[i].event_date}</p>
            <p>{data[i].summary}</p>
          </li>
      );
    }

    return(
      <React.Fragment>
        <section className="events">
        <ul>{eventsArr}</ul>
        </section>
      </React.Fragment>
    );
};


// **************************************************************//

