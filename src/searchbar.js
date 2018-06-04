import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = { term: "" };
  }
  onInputChange = term => {
    console.log(term);
    this.setState({ term });
    this.props.onsearchtermchange(term);
  };

  render() {
    return (
      <div className="search-bar">
        <input onChange={event => this.onInputChange(event.target.value)} />

      </div>
    );
  }
}






export default Search;
