import React from "react";

class FilmItemRow extends React.Component {
  render() {
    return (
      <li>
        <a href={this.props.url}>{this.props.url}</a>
      </li>
    );
  }
}

export default FilmItemRow;
