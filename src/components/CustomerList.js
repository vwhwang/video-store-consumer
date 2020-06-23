import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Customer from './Customer';
const BASE_URL = 'http://localhost:3000/customers/';
const axios = require('axios');

const CustomerList = (props) => {

  const [customers,setCustomers] = useState([]);

  // CALL RUBY RAILS API 
  useEffect(() => {

    axios.get(BASE_URL)

      .then((response) => {
        setCustomers(response.data);
      });

  }, []);

  const generateCustomers = customers.map((customer)=> {
      return <Customer key={customer.id} customer={customer} setSelectedCustomerCallBack= {props.setSelectedCustomerCallBack}/>
    })


  return <div>
    {generateCustomers}
  </div>


};


CustomerList.propTypes = {
  setSelectedCustomerCallBack: PropTypes.func.isRequired,
};


export default CustomerList;