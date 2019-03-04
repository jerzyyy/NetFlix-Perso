import React, { Component } from "react";


class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      placeholder: "Taper votre film"
    };
  }

  handleChange = e => {
    this.setState({ searchText: e.target.value });
    console.log(this.state.searchText);
  };
  render() {
    return (
      <div className="row">
        <div className="col-md-8">
          <input
            type="text"
            className="form-control input-lg"
            onChange={this.handleChange}
            placeholder={this.state.placeholder}
          />
        </div>
      </div>
    );
  }
}

export default Searchbar;
