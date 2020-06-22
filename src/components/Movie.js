
import React from 'react';
const axios = require('axios');
const BASE_URL = 'http://localhost:3000/movies/';


const listMovies = () => {

  axios.get(BASE_URL)
    .then((response)=>{
      console.log("Hi");
      console.log(response);
    })
    .catch((error)=>{
      // ;
    });
};

const Movie = () => {
  const data = listMovies();
  return <div >
  {data}
</div>
};


export default Movie;
