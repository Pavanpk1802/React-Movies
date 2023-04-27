import { Component } from "react";

class SearchBox extends Component {
  render() {

    return (
          <div className="searchSpace">
                    <input type="search" 
                    className={this.props.className}
                    placeholder={this.props.placeHolder}
                    onChange={this.props.searchHandler}
                    />
          </div>
    )
  }
}

export default SearchBox;
