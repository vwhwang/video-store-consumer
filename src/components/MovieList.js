import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Movie from './Movie';
const BASE_URL = 'http://localhost:3000/movies/';
const axios = require('axios');

const MovieList = (props) => {

  const [movies,setMovies] = useState([]);

  // CALL RUBY RAILS API 
  useEffect(() => {

    axios.get(BASE_URL)

      .then((response) => {
        setMovies(response.data);
      });

  }, []);



  // const onMovieClick =(movie) => {
  //   console.log(movie)
  // }

  const generateMovies = movies.map((movie)=> {
      return <Movie key={movie.id} movie={movie} setSelectedMovieCallBack= {props.setSelectedMovieCallBack}/>
    })


  return <div>
    {generateMovies}
  </div>


};


MovieList.propTypes = {
  setSelectedMovieCallBack: PropTypes.func.isRequired,
};


export default MovieList;
