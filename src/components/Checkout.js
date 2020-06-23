import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
const BASE_URL = 'http://localhost:3000/rentals/';
// http://localhost:3000/rentals/Psycho/check-out
const axios = require('axios');

const Checkout = (props) => {

  const [checkoutMovie,setCheckoutMovie] = useState({});
  const [checkoutCustomer,setCheckoutCustomer] = useState({});

  const onSubmitCheckout = (event) => {
    event.preventDefault();
    setCheckoutMovie(props.movie);
    setCheckoutCustomer(props.customer.id);
    console.log(checkoutCustomer);
    console.log(props.movie);
  }


  useEffect(() => {
    
    axios.post(BASE_URL + checkoutMovie + "/check-out",{
      customer_id: checkoutCustomer,
      due_date: Date.today + 7 
    })

      .then((response) => {
        // setMovies(response.data);
        console.log(response.data);
      })
      .catch((error)=>{
        console.log("error no customers selected!")
      });
      ;

  }, [checkoutMovie,checkoutCustomer]);



  // console.log(props.movie);

  return <button onClick = {onSubmitCheckout}>
    Check Out
  </button>
}

export default Checkout