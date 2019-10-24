import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './MoviesContainer.scss';

const MoviesContainer = ({ movieData }) => {

  const movies = movieData.map(prop => {
    return <MovieCard 
      key={prop.id}
      id={prop.id} 
      movieRating={prop.movieRating}
      backgroundImage={prop.backgroundImage}
      overview={prop.overview}
      posterImage={prop.posterImage}
      title={prop.title}
      releaseDate={prop.releaseDate}
      isFavorited={prop.isFavorited}
      />
  })
  

  return (
    <div className="scroll-wrapper">
      <section className="movies-container">
          {movies}
      </section>
    </div>
  )
}

export default MoviesContainer;