import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
const BASE_URL = 'http://localhost:3000/rentals/';

const axios = require('axios');


const Return = (props) => {

  const [ReturnMessage, setReturnMessage] = useState("");

  const [CustomerAndMovie,setCustomerAndMovie] = useState({
    movie: '',
    customer: ''
  });

  const onSubmitReturn = (event) => {
    event.preventDefault();

    setCustomerAndMovie({
      movie: props.movie,
      customer: props.customer.id
    });

  }


  useEffect(() => {

    axios.post(BASE_URL + CustomerAndMovie.movie + "/return", {
      
        customer_id:CustomerAndMovie.customer

    })

      .then((response) => {
        setReturnMessage(props.customer.name + " returned " + CustomerAndMovie.movie +" !" );
        console.log("Successfully Returned Movie" + CustomerAndMovie.movie);
        console.log(response.data);
      })
      .catch((error)=>{
        // not sure how to show error message
        // if (error.response.data.errors !== undefined){
        //   console.log(error.response.data.errors.rental[0]);
        //   setReturnMessage(error.response.data.errors.rental[0]);
        // };
          
        console.log(error.response.data.errors);
        console.log("FAILED ON API CALL")
      });
      ;

  }, [CustomerAndMovie]);





  return <div>
    <button onClick = {onSubmitReturn}>
    Return Movie
    </button>
    <p>{ReturnMessage}</p>

   </div>
}

export default Return