import React from 'react';
import superagent from 'superagent';


let __API_URL__ = 'https://afternoon-brook-55677.herokuapp.com';


class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search_query: '',
    };
  }

  handleSearchKeyword = e => {
    let search_query = e.target.value;
    this.setState({ search_query });
  };

  handleSubmit = async e => {
    e.preventDefault();
    let query = this.state.search_query;
    console.log(query);
    let data = await superagent.get(`${__API_URL__}/location`).query({ data : query });
    let apiResults = data.body;

    console.log('API RESULTS : ',apiResults);
    this.props.callback(apiResults);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleSearchKeyword} />
        <button onClick={this.handleSubmit}>Search</button>
      </form>
    );
  }
}

export default SearchForm;