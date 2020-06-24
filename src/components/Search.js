import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Movie from './Movie';
import SearchDetail from './SearchDetail';
const BASE_URL = 'http://localhost:3000/movies?query=';
const axios = require('axios');

const Search = (props) => {

  const [searchTerm, setSearchTerm] = useState({});
  const [submission,setSubmission] = useState({});
  const [searchResult, setResult] = useState([]);

  const onInputChange = (event) => {
    console.log(event.target.value);
    const newFormFields = {
      ...submission
    };
    newFormFields[event.target.name] = event.target.value;
    setSearchTerm(newFormFields);
  };

  const onSubmit =(event) => {
    event.preventDefault();
    setSubmission(searchTerm)
  };

  useEffect(() => {
    axios.get(BASE_URL + submission.title)
      .then((response) => {
        setResult(response.data);
      });
  }, [submission.title]);



  // show search movie details 
  const [searchDetail, setSearchDetail] = useState([]);

  const onClickDetails = (movie) => {
    setSearchDetail(movie);

  } 

  const generateSearches = searchResult.map((search)=> {
    return <Movie key={search.id} movie={search} onClickCallBack={onClickDetails}/>
  })

  return <div>
    <form onSubmit={onSubmit}>
      <input type="text"  onChange={onInputChange} 
       name="title"
            placeholder="Search movie title"
            value={submission.title}/>
      <div >
          <input type="submit" value="Submit Movie Search" />
      </div>

    </form>
    <h4>Results</h4>
      {generateSearches}
    <h6>Searched Movie Details:</h6>
{/* {searchDetail} */}
<SearchDetail movie = {searchDetail}/>
</div>

}

export default Search;

