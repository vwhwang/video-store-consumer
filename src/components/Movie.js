import React, {useState} from 'react';
const BASE_URL = 'http://localhost:3000/movies/';
const axios = require('axios');

const Movie = () => {

  const [movies,setMovie] = useState([]);

  const listMovies = () => {
    
    axios.get(BASE_URL)
      .then((response)=>{
        setMovie(response.data);
      })
      .catch((error)=>{
        // ;
      });
  
  };


  listMovies();

  return movies.map((movie)=> {
    return <div>
      Title: {movie.title}
    </div>
  })
};



export default Movie;
