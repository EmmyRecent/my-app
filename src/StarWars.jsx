import React from "react";
import FilmItemRow from "./FilmItemRow";

class StarWars extends React.Component {
  // Adding a state to the component
  constructor() {
    super();
    this.state = {
      name: null,
      gender: null,
      height: null,
      homeWorld: null,
      films: [],
      loadedCharacter: false,
    };
  }

  // Generating random character function()
  getRandomCharacter() {
    // console.log("This button was clicked"); // Test

    // Randomizing the characters
    const randomNumber = Math.round(Math.random() * 82);

    // API
    const url = `https://swapi.dev/api/people/${randomNumber}/`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // Setting the state to the button
        this.setState({
          name: data.name,
          gender: data.gender,
          height: data.height,
          homeWorld: data.homeworld,
          films: data.films,
          loadedCharacter: true,
        });
      });
  }

  render() {
    // Looping through the list
    const movies = this.state.films.map((url, i) => {
      return <FilmItemRow key={i} url={url} />;
    });

    return (
      <div>
        {/* If statement: if loaded character is true... */}
        {this.state.loadedCharacter && (
          <div>
            <h1>{this.state.name}</h1>
            <p>{this.state.gender}</p>
            <p>{this.state.height}</p>
            <p>
              <a href={this.state.homeWorld}>Home world</a>
            </p>
            <ul>{movies}</ul>
          </div>
        )}
        {/* Button onClick function added to the button */}
        <button
          onClick={() => {
            this.getRandomCharacter();
          }}
          type="button"
          className="btn"
        >
          Randomize Character
        </button>
      </div>
    );
  }
}

export default StarWars;
