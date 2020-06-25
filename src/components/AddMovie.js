import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
const BASE_URL = 'http://localhost:3000/add/';
const axios = require('axios');


const AddMovie= (props) => {

  const [AddedMovie, setAddedMovie] = useState({});


  const onSubmitAdd = (event) => {
    event.preventDefault();
    setAddedMovie(props.movie);

  }


  useEffect(() => {

    axios.post(BASE_URL , {
        external_id: AddedMovie.external_id,
        title: AddedMovie.title, 
        image_url: AddedMovie.image_url, 
        overview:AddedMovie.overview, 
        release_date: AddedMovie.release_date,
    })

      .then((response) => {
        console.log("Successfully Added Movie: " + AddedMovie.title);
        console.log(response.data);
      })
      .catch((error)=>{

        console.log(error.response.data.errors);
        console.log("FAILED to add new movie to library!")
      });
      ;

  }, [AddedMovie]);


  return <button onClick = {onSubmitAdd} className ="MainButton" id="Hotpink" >
    Add Movie to Library
  </button>
  


} ;

export default AddMovie