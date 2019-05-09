import React from 'react';
import If from './if/if.js';

class Result extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <React.Fragment>
        <ul>{this.props.children}</ul>
        <If condition={this.props.children.length > 1}>
        </If>
      </React.Fragment>
    );
   
  }
}

export default Result;