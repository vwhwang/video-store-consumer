import React from 'react';
import PropTypes from 'prop-types';

const Movie = (props) => {

  const onMovieClick =() => {
    const selectedMovie = {
      id: props.id,
      title: props.title
    }
    props.onClickCallback(selectedMovie);
  }

  return <button onClick = {onMovieClick}>
    {props.title}
  </button>

}

Movie.propTypes = {

  onClickCallback: PropTypes.func.isRequired

};
export default Movie