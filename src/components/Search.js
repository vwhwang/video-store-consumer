import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Movie from './Movie';
const BASE_URL = 'http://localhost:3000/movies?query=';
const axios = require('axios');

const Search = (props) => {

  const [submission,setSubmission] = useState("");
  const [searchResult, setResult] = useState([]);

  const onInputChange = (event) => {
    const newFormFields = {
      title:""
    };
    newFormFields[event.target.name] = event.target.value;
    setSubmission(newFormFields);
  };

  const onSubmit =(event) => {
    event.preventDefault();
    // props.onSubmitCallBack(submission);
    console.log(event);

    // if(submission.title !== ''){
    //   setSubmission({
    //     title:''
    //   });
    // };

  };



  useEffect(() => {

    axios.get(BASE_URL + "jaw")

      .then((response) => {
        setResult(response.data);
      });

  }, []);


  const generateSearches = searchResult.map((search)=> {
    return <Movie key={search.id} movie={search} setSelectedMovieCallBack= {props.setSelectedMovieCallBack}/>
  })

  return <div>
    <form onSubmit={onSubmit}>
      <input type="submit"  onChange={onInputChange}  name="a movie"
            placeholder="Search movie title"
            type="text"
            value={submission.title}/>
      <div >
          <input type="submit" value="Submit Movie Search" className="PlayerSubmissionForm__submit-btn" />
      </div>

    </form>
    <h4>Results</h4>
  {generateSearches}
</div>

}

export default Search;