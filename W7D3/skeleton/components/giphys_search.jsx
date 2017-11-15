import React from 'react';

import { GiphysIndex } from './giphys_index';

export default class GiphysSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    };
  }

  render() {
    return(
      <form>
        <input type="text" onChange={this.handleChange.bind(this)}/>
        <input type="submit" onClick={this.handleSubmit.bind(this)} value="Search Giphy!"/>
        <GiphysIndex giphys={this.props.giphys} />
      </form>
    );
  }

  handleChange(e) {
    this.setState({searchTerm: e.currentTarget.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    let searchTerm = this.state.searchTerm.split(' ').join('+');
    this.props.fetchSearchGiphys(searchTerm);
  }
}
