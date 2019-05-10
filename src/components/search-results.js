import React from 'react';
import Result,{Weather, Events, Yelp, Movies} from './result.js';

export const SearchResults = props => {

    return(
      <>
      <Weather value={props.weather}/>
      <Yelp value={props.yelp}/>
      <Events value={props.events}/>
      <Movies value={props.movies}/>
      </>
      
    );
   
  };