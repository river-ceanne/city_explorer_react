import React from 'react';

class Map extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      parentState : this.props.value.location,
      latitude : -33.8569,
      longitude: 151.2152,
      mapURL: `https://maps.googleapis.com/maps/api/staticmap?center=${this.latitude}%2c%20${this.longitude}&zoom=13&size=600x300&maptype=roadmap
      &key=${process.env.REACT_APP_GEOCODE_API_KEY}`
    };

    console.log('MAP STATE : ',this.state);
  }

  render() {
    let location = this.props.value.location;
    let mapURL = `https://maps.googleapis.com/maps/api/staticmap?center=${location.latitude},${location.longitude}&zoom=13&size=600x300&maptype=roadmap
    &key=${process.env.REACT_APP_GEOCODE_API_KEY}`;

    return (
      <img width="900" id="gmap_canvas" 
      src={mapURL}></img>
    );
  }
}

export default Map;