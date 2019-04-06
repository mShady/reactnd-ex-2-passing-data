import React, { Component } from "react";
import Movie from "./Movie";

class Movies extends Component {
  render() {
    const { movies, profiles, users } = this.props;
    return (
      <ul>
        {Object.keys(movies).map(id => (
          <Movie
            key={id}
            movieName={movies[id].name}
            users={Object.values(users).filter(user => {
              return (
                profiles.filter(
                  profile =>
                    profile.userID === user.id.toString() &&
                    profile.favoriteMovieID === id
                ).length > 0
              );
            })}
          />
        ))}
      </ul>
    );
  }
}

export default Movies;
