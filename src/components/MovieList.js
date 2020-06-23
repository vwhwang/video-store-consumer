import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Movie from './Movie';
const BASE_URL = 'http://localhost:3000/movies/';
const axios = require('axios');

const MovieList = (props) => {

  const [movies,setMovie] = useState([]);

  // CALL RUBY RAILS API 
  useEffect(() => {

    axios.get(BASE_URL)

      .then((response) => {
        setMovie(response.data);
      });

  }, []);

  // Click add movie


  const onMovieClick =(movie) => {
    console.log(movie)
  }
  
  const generateMovies = movies.map((movie)=> {
      return <Movie id={movie.id} title={movie.title} onClickCallback= {onMovieClick}/>
    })


  return <div>
    {generateMovies}
  </div>




  // return movies.map((movie)=> {
  //   return <div>
  //     Title: {movie.title}
  //     <button >
  //       Select Movie
  //     </button>
  //     </div>
  // })


};




export default MovieList;
