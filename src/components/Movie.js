import React from 'react';
import PropTypes from 'prop-types';

const Movie = (props) => {

  const onMovieClick =() => {
    props.setSelectedMovieCallBack(props.movie);
  }

  return <button onClick = {onMovieClick}>
    {props.movie.title}
  </button>

}

Movie.propTypes = {
  setSelectedMovieCallBack: PropTypes.func.isRequired,
  movie: PropTypes.object
};

export default Movie