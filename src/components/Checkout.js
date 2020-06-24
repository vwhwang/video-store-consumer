import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
const BASE_URL = 'http://localhost:3000/rentals/';
// http://localhost:3000/rentals/Psycho/check-out
const axios = require('axios');

const Checkout = (props) => {

  const [CheckoutMessage, setCheckoutMessage] = useState("");

  const [CustomerAndMovie,setCustomerAndMovie] = useState({
    movie: '',
    customer: ''
  });

  const onSubmitCheckout = (event) => {
    event.preventDefault();

    setCustomerAndMovie({
      movie: props.movie,
      customer: props.customer.id
    });

  }


  useEffect(() => {

    let new_due_date = new Date;
    new_due_date.setDate(new_due_date.getDate() + 7 );

    axios.post(BASE_URL + CustomerAndMovie.movie + "/check-out", {
      
        customer_id:CustomerAndMovie.customer,
        due_date: new_due_date,

    })

      .then((response) => {
        setCheckoutMessage(props.customer.name + " checked out " + CustomerAndMovie.movie +" !" );
        console.log("Successfully Checked Out Movie" + CustomerAndMovie.movie);
      })
      .catch((error)=>{
        console.log("FAILED ON API CALL")
      });
      ;

  }, [CustomerAndMovie]);





  return <div>
    <button onClick = {onSubmitCheckout}>
    Check Out
    </button>
    <p>{CheckoutMessage}</p>

   </div>
}

export default Checkout