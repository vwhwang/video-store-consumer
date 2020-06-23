import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Movie from './Movie';
const BASE_URL = 'http://localhost:3000/movies?query=';
const axios = require('axios');

const Search = (props) => {

  // const [searchTitle, setSearchTitle] = useState("");
  const [searchResult, setResult] = useState([]);

  useEffect(() => {

    axios.get(BASE_URL + "pretty women")

      .then((response) => {
        setResult(response.data);
      });

  }, []);

  const generateSearches = searchResult.map((search)=> {
    return <Movie key={search.id} movie={search} setSelectedMovieCallBack= {props.setSelectedMovieCallBack}/>
  })

  return <div>
  {generateSearches}
</div>

}

export default Search;